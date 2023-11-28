// 引入名为 'WindowManager.js' 的模块
import WindowManager from './WindowManager.js';

const t = THREE;  // 创建 THREE.js 的别名
let camera, scene, renderer, world;  // 定义场景、摄像机、渲染器、世界等变量
let near, far;  // 定义近平面和远平面
let pixR = window.devicePixelRatio ? window.devicePixelRatio : 1;  // 获取设备像素比例
let cubes = [];  // 存储立方体的数组
let sceneOffsetTarget = { x: 0, y: 0 };  // 场景偏移的目标位置
let sceneOffset = { x: 0, y: 0 };  // 场景偏移的当前位置

// 获取当前日期的零时刻时间戳
let today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);
today = today.getTime();

// 获取当前时间距离当天零时刻的秒数
let internalTime = getTime();
let windowManager;
let initialized = false;

// 获取当前时间的秒数
function getTime() {
    return (new Date().getTime() - today) / 1000.0;
}

// 如果 URL 查询参数中包含 "clear"，则清空本地存储
if (new URLSearchParams(window.location.search).get("clear")) {
    localStorage.clear();
} else {
    // 当文档可见状态改变时，初始化场景
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState != 'hidden' && !initialized) {
            init();
        }
    });

    // 在窗口加载完成时，如果文档可见，初始化场景
    window.onload = () => {
        if (document.visibilityState != 'hidden') {
            init();
        }
    };

    // 初始化函数
    function init() {
        initialized = true;

        // 添加短暂的延迟，因为 window.offsetX 在一小段时间内报告错误的值
        setTimeout(() => {
            setupScene();
            setupWindowManager();
            resize();
            updateWindowShape(false);
            render();
            window.addEventListener('resize', resize);
        }, 500);
    }

    // 设置场景
    function setupScene() {
        // 创建正交摄像机
        camera = new t.OrthographicCamera(0, 0, window.innerWidth, window.innerHeight, -10000, 10000);

        camera.position.z = 2.5;
        near = camera.position.z - .5;
        far = camera.position.z + 0.5;

        // 创建场景
        scene = new t.Scene();
        scene.background = new t.Color(0.0);
        scene.add(camera);

        // 创建 WebGL 渲染器
        renderer = new t.WebGLRenderer({
            antialias: true,
            depthBuffer: true
        });
        renderer.setPixelRatio(pixR);

        // 创建 Object3D 作为世界的容器
        world = new t.Object3D();
        scene.add(world);

        // 将渲染器的 DOM 元素添加到文档中
        renderer.domElement.setAttribute("id", "scene");
        document.body.appendChild(renderer.domElement);
    }

    // 设置 WindowManager
    function setupWindowManager() {
        windowManager = new WindowManager();
        windowManager.setWinShapeChangeCallback(updateWindowShape);
        windowManager.setWinChangeCallback(windowsUpdated);

        // 在这里可以为每个窗口实例添加自定义元数据
        let metaData = {
            foo: "bar"
        };

        // 初始化 WindowManager 并将窗口添加到集中的窗口池中
        windowManager.init(metaData);

        // 最初调用更新窗口（之后将由窗口变化回调函数调用）
        windowsUpdated();
    }

    // 窗口更新回调函数
    function windowsUpdated() {
        updateNumberOfCubes();
    }

    // 更新立方体数量
    function updateNumberOfCubes() {
        let wins = windowManager.getWindows();

        // 移除所有立方体
        cubes.forEach((c) => {
            world.remove(c);
        });

        cubes = [];

        // 根据当前窗口设置添加新的立方体
        for (let i = 0; i < wins.length; i++) {
            let win = wins[i];

            let c = new t.Color();
            c.setHSL(i * .1, 1.0, .5);

            let s = 100 + i * 50;
            let cube = new t.Mesh(new t.BoxGeometry(s, s, s), new t.MeshBasicMaterial({
                color: c,
                wireframe: true
            }));
            cube.position.x = win.shape.x + (win.shape.w * .5);
            cube.position.y = win.shape.y + (win.shape.h * .5);

            world.add(cube);
            cubes.push(cube);
        }
    }

    // 更新窗口形状
    function updateWindowShape(easing = true) {
        // 将实际偏移存储在一个代理中，在渲染函数中更新
        sceneOffsetTarget = {
            x: -window.screenX,
            y: -window.screenY
        };
        if (!easing) sceneOffset = sceneOffsetTarget;
    }

    // 渲染函数
    function render() {
        let t = getTime();

        windowManager.update();

        // 根据当前偏移和新偏移之间的差值乘以衰减值（以创建漂亮的平滑效果）计算新位置
        let falloff = .05;
        sceneOffset.x = sceneOffset.x + ((sceneOffsetTarget.x - sceneOffset.x) * falloff);
        sceneOffset.y = sceneOffset.y + ((sceneOffsetTarget.y - sceneOffset.y) * falloff);

        // 将世界位置设置为偏移值
        world.position.x = sceneOffset.x;
        world.position.y = sceneOffset.y;

        let wins = windowManager.getWindows();

        // 循环遍历所有立方体并根据当前窗口位置更新其位置
        for (let i = 0; i < cubes.length; i++) {
            let cube = cubes[i];
            let win = wins[i];
            let _t = t; // + i * .2;

            let posTarget = {
                x: win.shape.x + (win.shape.w * .5),
                y: win.shape.y + (win.shape.h * .5)
            }

            cube.position.x = cube.position.x + (posTarget.x - cube.position.x) * falloff;
            cube.position.y = cube.position.y + (posTarget.y - cube.position.y) * falloff;
            cube.rotation.x = _t * .5;
            cube.rotation.y = _t * .3;
        }

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    // 调整渲染器大小以适应窗口大小
    function resize() {
        let width = window.innerWidth;
        let height = window.innerHeight

        camera = new t.OrthographicCamera(0, width, 0, height, -10000, 10000);
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }
}
