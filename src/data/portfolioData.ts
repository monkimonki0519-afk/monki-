import {
  EducationItem,
  InternshipItem,
  VibeWorkItem,
  AIVideoItem,
  AIToolChoice,
  ProjectItem,
  GachaCard,
} from '../types';

export const PERSONAL_INFO = {
  name: '戴翰阳',
  enName: 'Dai Hanyang',
  role: 'AI 产品经理 / AI Product Manager',
  target: 'AI 产品经理（实习/校招）',
  status: '2027 届毕业生 · 随时到岗',
  phone: '(86)18874780665',
  email: '1561473175@qq.com',
  city: 'Hong Kong · 香港',
  coreSkills: 'Vibe Coding · AI Agent 产品设计 · 大模型评测 · PR · 达芬奇 · 剪映',
  intro:
    '编导出身的AI 产品经理，在万兴科技主导小说转剧本 Agent 从 0 到 1，独立用 Vibe Coding 开发协同评分系统上线。未来，想做像鱿鱼干一样耐嚼的产品，也做一个有艺术理想的产品经理。',
  resumeUrl: '#', // placeholder or /resume.pdf
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'cityu',
    period: '2026.09 — 2027.06',
    statusTag: '在读',
    statusTagType: 'primary',
    school: '香港城市大学',
    degree: '硕士',
    major: '整合营销',
    rankInfo: 'QS 世界大学排名 No.52',
    description:
      '一年制授课型硕士，课程覆盖品牌策略、消费者洞察、数字传播与整合营销研究方法，培养全局视角与数据驱动决策能力。',
    isDark: false,
  },
  {
    id: 'hnnu',
    period: '2022.09 — 2026.06',
    statusTag: '211 · 双一流',
    statusTagType: 'secondary',
    school: '湖南师范大学',
    degree: '本科',
    major: '广播电视编导',
    rankInfo: 'GPA 3.98 / 5.00 · 专业前 10%',
    weightedScore: '加权平均 86.3',
    description:
      '系统掌握视听语言、内容叙事与数字媒体技术。主修：影视艺术与技术（96）、电视节目编导与导播（95）、传播学概论（93）、电视节目创意与策划（92）。',
    courses: [
      { name: '影视艺术与技术', score: 96 },
      { name: '电视节目编导与导播', score: 95 },
      { name: '传播学概论', score: 93 },
      { name: '电视节目创意与策划', score: 92 },
    ],
    isDark: true,
  },
];

export const INTERNSHIP_LIST: InternshipItem[] = [
  {
    id: 'baidu',
    company: '百度在线网络技术有限公司',
    role: '技术传播',
    period: '2026.05 – 2026.08',
    capabilities: ['技术传播全案', '行业研究', 'Agent 设计', '内容增长'],
    points: [
      {
        title: '技术传播与行业研究',
        description:
          '主导「文心大模型」「Paddle OCR」等技术传播全案策划，独立产出技术传播 Brief 与技术白皮书拆解，统筹三方执行与平台审核，推动 5+ 个项目从策划到落地的全链路闭环；建立数据复盘与 AI 行业竞品监测体系，输出 20+ 份行业洞察报告，形成对大模型能力边界与产品化路径的系统认知。',
        metricHighlight: '推动 5+ 个全案项目闭环，输出 20+ 份行业洞察报告',
      },
      {
        title: 'Agent 设计与内容增长',
        description:
          '运营 4 个小红书矩阵账号，独立设计并搭建半自动化账号运营 Agent（热点与竞品监测 → 竞帖拆解 → 选题生成 → 内容产出 → 发布引流 → 数据回收），定义各段人机分工与人工介入点；2 个月产出 10 篇爆款内容（互动量 5000+），实现 1000+ 精准粉丝增长；协同执行文心大模型 5.1 发布、Create 2026 开发者大会等 5 场高规格传播活动。',
        metricHighlight: '2 个月产出 10 篇爆款、涨粉 1000+，协同执行 5 场高规格大会',
      },
    ],
  },
  {
    id: 'wondershare',
    company: '万兴科技集团股份有限公司',
    role: '产品经理',
    period: '2025.12 – 2026.04',
    capabilities: ['AI Agent 产品设计', 'Vibe Coding', '商业化', '大模型评测'],
    points: [
      {
        title: '产品设计与落地',
        description:
          '主导「万兴剧厂」小说转剧本 Agent 产品从 0 到 1 设计与全流程搭建，构建男/女频通用结构化内容知识库，协同算法团队完成端到端开发与上线；产品上线后月均付费转化率达 20.31%，单模块累计积分消耗超 100 万、折合营收破 10 万元，Q1 客户满意度 78.9%，实现商业化与口碑双增长；连续 3 个月绩效评定 A 级。',
        metricHighlight: '月均付费转化率 20.31%，积分消耗超 100 万/营收破 10 万元，连续 3 个月绩效 A 级',
      },
      {
        title: '测评体系搭建与 Vibe Coding 开发',
        description:
          '针对 AI 生成剧本「质量不稳定、验收依赖个人经验、标准不可复用」的痛点，独立设计剧本验收测评体系，从框架意识、剧情节奏、卡点能力等 7 个维度建立可量化评分标准与权重；独立完成评分系统开发（Vibe Coding）并部署上线供团队日常使用，支持 10 人协同打分、自动评分与结果实时汇总，定位生成内容的共性短板，为 prompt 与知识库迭代提供依据。',
        metricHighlight: '建立 7 维度量化评分标准，独立开发并上线 10 人协同评分系统',
      },
      {
        title: '大模型评测与行业研究',
        description:
          '针对可灵 3.1、Seedance 2.0 等主流视频生成大模型开展多维度美学评测，输出专业评测报告，为产品选型提供核心决策依据；每周跟踪 Artificial Analysis 榜单，持续开展前沿模型调研与竞品分析。',
        metricHighlight: '完成可灵 3.1 / Seedance 2.0 深度评测，赋能核心产品选型决策',
      },
    ],
  },
  {
    id: 'huatian',
    company: '湖南华天国际旅行社有限责任公司',
    role: '产品策划',
    period: '2025.09 – 2025.12',
    capabilities: ['活动策划', '账号运营', '传播统筹'],
    points: [
      {
        title: '活动策划与全网传播',
        description:
          '策划并执行「贡嘎文旅团」16 天交流活动，统筹摄影团队全程跟拍，报道登上红网、新湖南、华声在线等省级平台，累计浏览量超 100 万+，显著扩大了活动的传播声量与品牌影响力。',
        metricHighlight: '统筹 16 天文旅活动全程跟拍，省级平台报道累计浏览 100 万+',
      },
      {
        title: '账号运营与品牌打造',
        description:
          '负责视频号日常内容运营，配合「潇湘号」旅游专列（长沙直达新疆的高端文旅列车，将五星级酒店服务与品质餐饮搬上车厢）完成线上线下联动宣传推广，助力专列品牌心智打造。',
        metricHighlight: '完成「潇湘号」高端旅游专列线上线下联动推广',
      },
    ],
  },
  {
    id: 'canbaobao',
    company: '上海蚕宝宝文化传媒有限公司',
    role: '实习导演',
    period: '2025.06 – 2025.08',
    capabilities: ['现场统筹', '素材洞察', '综艺制作'],
    points: [
      {
        title: '现场统筹与项目调度',
        description:
          '参与爱奇艺 S 级综艺《微笑一号店》（抖音主话题 #微笑一号店 播放量 42.8 亿+、UGC 投稿 126 万+，衍生子话题合计 15 亿+，稳居 2025 年 S 级综艺第一梯队）录制全流程，负责嘉宾对稿，保障镜头内容与节目节奏衔接顺畅；协同统筹拍摄进度与现场调度，锤炼突发应变与项目管理能力。',
        metricHighlight: '深入 S 级头部综艺全流程录制，主话题播放 42.8 亿+、UGC 126 万+',
      },
      {
        title: '素材洞察与爆款切片',
        description:
          '从海量现场素材中提炼叙事亮点，为后期筛选高潜力内容，多条切片点赞破 200 万、长期霸榜抖音综艺热榜，直接助推成片热度与传播破圈。',
        metricHighlight: '精准提炼叙事亮点，打造多条 200 万+ 点赞爆款切片',
      },
    ],
  },
];

export const VIBE_WORKS_LIST: VibeWorkItem[] = [
  {
    id: 'script-eval',
    tag: 'VIBE CODING · 独立全栈开发',
    title: '万兴剧厂 · 小说与剧本质量测评系统',
    summary:
      '解决 AI 生成小说与剧本「质量不稳定、验收依赖人工经验、测评维度不统一」核心痛点，独立全栈完成指标量化、打分看板与雷达图分析系统并成功部署上线。',
    details: [
      '构建 7 大核心可量化评估体系：框架意识、剧情节奏、卡点能力、人物塑造、对白质量、爽点分布与镜头延展性',
      '支持 10 人团队实时协同打分、算法自动加权汇总、共性短板雷达图分析与导出评估报告',
      '无缝对接万兴剧厂研发与运营链路，为 Prompt 调优与知识库持续迭代提供高信度数据支撑',
    ],
    metrics: [
      { value: '7 维度', label: '量化测评体系' },
      { value: '10 人', label: '实时协同打分' },
      { value: '已上线', label: '在线直接体验' },
    ],
    link: 'https://ai.studio/apps/5c6008ae-2ecc-4232-a6b7-78f838b7302d',
    imagePlaceholderText: '【点击直达体验：小说与剧本测评系统在线 App】',
    status: 'online',
  },
];

export const AI_VIDEOS_LIST: AIVideoItem[] = [
  {
    id: 'video-basketball',
    tag: '创意广告 · 1 分钟',
    title: '一分钟创意广告《ball is life》',
    category: 'AI 创意广告 / 概念短片',
    duration: '01:00',
    summary: '运用 AI 生成技术打造高燃超现实创意广告，探索全场景篮球运动与快节奏镜头剪辑。',
    link: 'https://www.bilibili.com/video/BV17DtU66EUo',
    placeholderText: '【已配置 B 站播放源，点击即可直接在站内播放或跳转查看】',
  },
  {
    id: 'video-fuping',
    tag: '江湖武侠 · 3 分钟短剧',
    title: '江湖武侠短剧《浮萍》（第一集）',
    category: 'AI 漫剧 / 武侠微短剧',
    duration: '03:00',
    summary:
      '元末乱世悬疑武侠短片。雨夜茶馆中，五名反抗官府的江湖人物被追兵逼入绝境。为了找出泄露行动的内奸，他们开始互相猜疑，却发现每个人都隐藏着无法告人的过去。当真相揭开，身份不断反转——乱世之中，谁是真正的义士，谁又只是另一场阴谋中的棋子？（本项目展示为第一集）',
    link: 'https://www.bilibili.com/video/BV1w1MB6vE5K',
    placeholderText: '【已配置 B 站播放源，点击即可直接在站内播放或跳转查看】',
  },
];

export const AI_TOOL_CHOICES: AIToolChoice[] = [
  {
    category: '语言模型',
    tool: 'GPT-5.5',
    reason: '剧本和分镜需要跨场次保持人物与剧情一致，对长上下文依赖极高',
  },
  {
    category: '视频生成',
    tool: 'Seedance 2.0',
    reason: '看重长视频生成的稳定性，减少分段生成带来的衔接损耗',
  },
  {
    category: '图片生成',
    tool: '豆包最新模型 + GPT Image 2',
    reason: '两者风格互补，前者本地化审美更贴合，后者复杂构图更稳',
  },
  {
    category: '生产平台',
    tool: 'UP Dream 漫剧助手',
    reason: '统一管理分镜、美术资产与生成任务',
  },
];

export const TOOL_STACK = [
  'Cursor',
  'Claude Code',
  'v0.dev',
  'Rive',
  'Figma Make',
  'Next.js',
  'Tailwind CSS',
  'Python',
  'Postman',
  'Notion',
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    number: '01',
    name: '毕设个人导演作品《在途中》',
    role: '导演 & 编剧',
    period: '2024.10 – 2025.05',
    description:
      '三位青年电影人山青、云舒、猴子为拍摄理想作品奔波堪景，在资金压力与创作妥协间拉扯，最终选择直面现实困境。故事的讲法还有很多种，一直向前，行在路上，才是再次启程的意义。',
    points: [
      '独立负责剧本编创、分镜绘制、演员选角及全片现场执导，精准把控叙事节奏与情绪表达',
      '统筹摄制组前期堪景、灯光美术与声音设计，在预算限制下完成高规格院线质感短片交付',
      '作品发布于 B 站等平台，深挖青年创作者的真实心境与时代困境，引发广泛共鸣与好评',
    ],
    metricsBadge: '个人导演毕业作品 · 独立执导全流程 · B 站在线展映',
    link: 'https://www.bilibili.com/video/BV1hQhQztEGP',
  },
  {
    number: '02',
    name: '至美工作室',
    role: '工作室负责人',
    period: '2023.01 – 2026.06',
    description:
      '全面管理 50 余人学生创作团队，负责业务拓展、项目统筹与商业化交付闭环。',
    points: [
      '定期开展影视拉片、摄影灯光实验与短片创作工作坊，夯实团队专业交付基底',
      '承接校内各学院官方宣传片、周年庆主题片以及校企合作企业商业级拍摄订单',
      '主导与岳麓山戒毒所等政企事业单位建立包年长期框架合作，实现工作室品牌化与稳定健康营收',
    ],
    metricsBadge: '管理 50+ 人团队 · 建立政企包年合作 · 稳定商业化',
  },
  {
    number: '03',
    name: '国家级大学生创新创业项目「UP 青年工作坊」',
    role: '项目负责人',
    period: '2024.05 – 2025.06',
    description:
      '从 0 到 1 搭建并主导新媒体内容实验室运营，主导创意策划、现场拍摄及剪辑全流程。',
    points: [
      '独立策划出品聚焦青年文化与成长议题的系列短视频，单条视频在省级平台播放达 40 万',
      '全网矩阵累计播放量突破 100 万+，形成高辨识度的青年文化内容 IP',
      '项目获国家级立项并以优异成绩顺利结项，斩获新文科竞赛二等奖、创新创业大赛三等奖',
    ],
    metricsBadge: '国家级立项顺利结项 · 单条播放 40万 / 累计破百万 · 竞赛二等奖',
  },
  {
    number: '04',
    name: '「新湖南 · 文旅推荐官系列」',
    role: '策划 & 摄影',
    period: '2024.02 – 2024.05',
    description:
      '以「老街道里的长沙」为切口，跳出地标叙事套路，用烟火、光影与方言重新解构城市记忆。',
    points: [
      '深入太平街、潮宗街等历史老巷，以人文纪实视角捕捉城市生长与市井温情',
      '打造具有极强在地感与视听审美的文旅短视频，获省级主流媒体「新湖南」全网刊载力推',
      '全网累计播放突破 80 万+，以「别样视角看长沙」助推城市文旅形象的年轻化破圈表达',
    ],
    metricsBadge: '省级主流媒体「新湖南」刊载 · 全网播放 80 万+ · 文旅破圈',
  },
];

export const GACHA_SKILLS: GachaCard[] = [
  {
    id: 's-vibe-coding',
    name: 'Vibe Coding',
    type: 'skill',
    level: '可独立开发上线',
    categoryTag: '全栈原型',
    description: '精通使用 AI 编程工具协同快速构建高保真产品原型、全栈工具与数据打分系统，具备将 Prompt 与业务逻辑直接转化为上线产品的极速交付能力。',
    iconName: 'Code2',
  },
  {
    id: 's-agent-design',
    name: 'AI Agent 产品设计',
    type: 'skill',
    level: '全链路0→1',
    categoryTag: '核心产品',
    description: '精通多智能体协作、结构化知识库（RAG）、工作流编排与人机介入点（HITL）设计，曾主导小说转剧本 Agent 与小红书全自动运营 Agent。',
    iconName: 'Bot',
  },
  {
    id: 's-model-eval',
    name: '大模型量化评测',
    type: 'skill',
    level: '体系搭建',
    categoryTag: '评测基准',
    description: '针对 LLM 与视频生成大模型建立多维度量化评分标准（7大维度测评框架），持续跟踪前沿模型能力边界，赋能精准选型与迭代。',
    iconName: 'BarChart3',
  },
  {
    id: 's-pr',
    name: 'Premiere Pro',
    type: 'skill',
    level: '熟练掌握',
    categoryTag: '视频制作',
    description: '具备多年专业视频剪辑、粗剪定剪、多机位音频对齐与商业节奏控制经验，高效统筹视频后期全流程。',
    iconName: 'Film',
  },
  {
    id: 's-davinci',
    name: 'DaVinci Resolve',
    type: 'skill',
    level: '专业调色',
    categoryTag: '影视视效',
    description: '精通达芬奇节点式调色工作流、色彩空间管理（ACES/Color Space Transform）与电影级质感打磨，深谙视听美学法则。',
    iconName: 'Palette',
  },
  {
    id: 's-capcut',
    name: '剪映 / CapCut',
    type: 'skill',
    level: '熟练掌握',
    categoryTag: '短视频增长',
    description: '敏锐捕捉短视频网感与前 3 秒黄金定律，熟练运用动效模板与卡点转场快速产出爆款传播物料。',
    iconName: 'Zap',
  },
  {
    id: 's-office',
    name: 'Office & 数据分析',
    type: 'skill',
    level: '熟练掌握',
    categoryTag: '综合办公',
    description: '熟练产出商业级 PRD、MRD、竞品分析报告与多维数据交叉透视表，以严密逻辑支撑产品立项与复盘。',
    iconName: 'FileSpreadsheet',
  },
  {
    id: 's-content-strategy',
    name: '内容策划与传播',
    type: 'skill',
    level: '全案操盘',
    categoryTag: '整合营销',
    description: '兼具香港城市大学整合营销理论与百度技术传播实战，擅长技术白皮书拆解、爆款选题打造与全域增长闭环。',
    iconName: 'Megaphone',
  },
];

export const GACHA_HOBBIES: GachaCard[] = [
  {
    id: 'h-photo',
    name: '摄影',
    type: 'hobby',
    description: '热爱街头纪实与光影抓拍，用镜头洞察日常细节中的故事与美学张力，沉淀敏锐的视觉感知。',
    iconName: 'Camera',
  },
  {
    id: 'h-climbing',
    name: '攀岩',
    type: 'hobby',
    description: '在岩壁上享受线路拆解、心理博弈与肌肉记忆的结合，追求纯粹的专注力与极限攻克感。',
    iconName: 'Mountain',
  },
  {
    id: 'h-hiking',
    name: '徒步',
    type: 'hobby',
    description: '用脚步丈量山野与荒原，曾深度徒步川西贡嘎等线路，保持对自然规律与未知领域的敬畏。',
    iconName: 'Compass',
  },
  {
    id: 'h-fitness',
    name: '健身',
    type: 'hobby',
    description: '长期保持力量训练与自律作息，强化身体机能与心肺耐力，为高强度快节奏工作提供充沛精力。',
    iconName: 'Dumbbell',
  },
  {
    id: 'h-clarinet',
    name: '单簧管',
    type: 'hobby',
    description: '研习单簧管演奏，培养对节奏、音色与声部协同的敏锐直觉，在黑白键与管乐声中寻找灵感平衡。',
    iconName: 'Music',
  },
];

export const HONORS_AND_LANGUAGES = {
  languages: [
    { name: 'IELTS (雅思)', score: '6.5' },
    { name: '英语四级 (CET-4)', score: '通过' },
    { name: '英语六级 (CET-6)', score: '通过' },
  ],
  honors: [
    '中国高校计算机大赛 / 数字艺术设计大赛（国 3 省 1）',
    '全国大学生广告艺术大赛（国家级优秀奖 × 3）',
    '湖南原创视听大赛（省级一等奖）',
    '校级综合优秀奖学金（连续三次获得）',
  ],
};
