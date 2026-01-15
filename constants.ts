import { CourseModule, ResourceItem, AssessmentItem } from './types';

export const COURSE_INFO = {
  title: "品牌系统与视觉识别",
  englishTitle: "Brand System & Visual Identity",
  code: "21020139B",
  school: "文华学院",
  semester: "第6学期",
  hours: "64学时 (理论48 / 实践16)",
  credits: "4.0",
  type: "专业核心课程 (必修)"
};

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: "第一章：品牌识别体系",
    hours: 4,
    type: 'theory',
    description: "理解品牌从战略定位到视觉执行的内在逻辑，掌握核心概念。",
    objectives: [
      "品牌识别定义与核心价值",
      "市场分析与关键词提炼",
      "策略引导设计的思维框架"
    ],
    keyPoints: [
      "重点：视觉设计背后的商业逻辑",
      "难点：将复杂市场信息转化为简洁有效的“品牌关键词”"
    ]
  },
  {
    id: 2,
    title: "第二章：标志设计原理与创意",
    hours: 16,
    type: 'mixed',
    description: "从关键词到视觉符号的转换，完成标志的规范化制图。",
    objectives: [
      "标志类型、原则与趋势",
      "图形创意与视觉隐喻",
      "标志设计冲刺工作坊 (Sketch to Vector)"
    ],
    keyPoints: [
      "重点：抽象视觉思维与符号提炼",
      "难点：精准运用视觉隐喻深化标志内涵"
    ],
    deliverables: "品牌标志提案 (草图、黑白稿、标准稿)"
  },
  {
    id: 3,
    title: "第三章：品牌基础要素系统构建",
    hours: 16,
    type: 'mixed',
    description: "建立统一且可延展的品牌色彩、字体与图像风格体系。",
    objectives: [
      "品牌色彩体系与字体规范",
      "辅助图形的设计与延展",
      "智能工具辅助配色与图形生成"
    ],
    keyPoints: [
      "重点：建立“品牌视觉系统整体化”意识",
      "难点：辅助图形的功能性强化而非简单装饰"
    ],
    deliverables: "基础系统规范 (色彩、字体、辅助图形)"
  },
  {
    id: 4,
    title: "第四章：品牌应用系统开发",
    hours: 12,
    type: 'practice',
    description: "跨媒介应用设计，涵盖办公、宣传、导视及数字媒体。",
    objectives: [
      "办公系统 (名片、信函)",
      "宣传物料 (海报、包装)",
      "导视与数字媒体应用"
    ],
    keyPoints: [
      "重点：不同媒介中的尺寸、材质适应性",
      "难点：跨媒介场景下的视觉一致性控制"
    ],
    deliverables: "应用设计效果图 (Mockups)"
  },
  {
    id: 5,
    title: "第五章：VI规范手册与方案呈现",
    hours: 16,
    type: 'practice',
    description: "系统化整理设计成果，编制VI手册并进行最终汇报。",
    objectives: [
      "VI手册结构与版式设计",
      "规范化说明撰写",
      "提案技巧与演讲"
    ],
    keyPoints: [
      "重点：将设计成果转化为标准化的“品牌规范体系”",
      "难点：从“设计者”视角切换为“提案者”视角"
    ],
    deliverables: "完整VI规范手册 (PDF/Print)"
  }
];

export const ASSESSMENT_DATA: AssessmentItem[] = [
  { name: "平时表现 (课堂/提问)", value: 21, color: "#e5e5e5", details: "总评占比 21% (70% × 30%)" },
  { name: "项目过程 (作业质量)", value: 35, color: "#d4d4d4", details: "总评占比 35% (70% × 50%)" },
  { name: "出勤率", value: 14, color: "#a3a3a3", details: "总评占比 14% (70% × 20%)" },
  { name: "结课大作业", value: 30, color: "#1a1a1a", details: "总评占比 30%" },
];

export const RESOURCES: ResourceItem[] = [
  { title: "品牌设计及IP打造流程全解析", author: "何亚龙", type: "book" },
  { title: "品牌设计全书", author: "迈克尔·威翰逊", type: "book" },
  { title: "Behance / Pinterest", type: "web", url: "https://www.behance.net" },
  { title: "Midjourney / Stable Diffusion", type: "tool" },
  { title: "Adobe Firefly", type: "tool" }
];
