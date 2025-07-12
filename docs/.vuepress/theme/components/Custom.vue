<template>
  <div class="container" @mousemove="handleMouseMove">
    <canvas ref="canvasRef"></canvas>
    <div class="head-social">
      <div class="card-content grid-row-3-3">
        <router-link to="/blog/" class="head-social-avatar"><img src="/avatar.jpg" alt="avatar"></router-link>
        <p class="about-me-card-text-big"><span style="color: white;">无限进步</span>，<span
            style="color: #d53737">势必达成</span></p>
      </div>

    </div>
    <div class="about-me">
      <div class="card-content grid-row-3-2">
        <AboutMeName/>
        <AboutMeCharacter/>
      </div>
      <div class="card-content grid-row-1">
        <AboutMeText/>
      </div>
      <div class="card-content grid-row-1-1">
        <AboutMeSkill/>
        <AboutMeText>
          <template #motto>
            <slot name="motto">
              <p class="about-me-card-title-normal">你还不开始学习嘛</p>
              <!-- 添加带链接的显眼文案 -->
              <router-link to="/JAVA/start/" class="cta-button">
                开始涨薪
              </router-link>
            </slot>
          </template>
        </AboutMeText>
      </div>
      <div class="card-content grid-row-3-1">
        <AboutMeFriendLink/>
        <AboutMeFriendLink/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta-button {
  display: flex;
  height: 80%;
  width: 80%;
  padding: 16px 0;
  text-align: center;
  margin: 0 auto;
  font-size: 50px;
  font-weight: bold;
  color: #1b67da;
  background-color: #82afe1;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(86, 179, 220, 0.4);
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
}

.cta-button:hover {
  background-color: #1c78e8;
  color: #000000;
  transform: scale(1.05);
}
.container {
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}

canvas {
  z-index: -1;
  position: fixed;
  top: -1px;
  left: -1px;
  pointer-events: none; /* 允许鼠标事件穿透 */
  overflow: hidden;
}

.head-social {
  display: flex;
  width: fit-content;
  margin: 0 auto;
  align-items: center;

  .head-social-avatar {
    margin: 20px;
    border-radius: 50%; /* 改为圆形 */
    overflow: hidden; /* 确保图片裁剪成圆形 */
    width: 60px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .head-social-btn {
    cursor: pointer;
    font-size: 30px;
    margin: 0px;
    transition: transform 0.2s, color 0.3s;
    color: var(--vp-c-text-2);

    &:hover {
      color: var(--vp-c-brand-1);
      transform: scale(1.2);
    }
  }
}

.about-me {
  max-width: 1380px;
  margin: 0 auto;
  width: 90%;
  @media screen and (max-width: 770px) {
    width: 94%;
  }
}

.card-content {
  margin-top: 20px;
  display: grid;
  gap: 20px;
  @media screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
}

.grid-row-3-2 {
  grid-template-columns: 3fr 2fr;
}

.grid-row-3-3 {
  grid-template-columns: 3fr 1fr;
}

.grid-row-1-1 {
  grid-template-columns: 1fr 1fr;
}

.grid-row-1 {
  grid-template-columns: 1fr;
}

.container {
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}

canvas {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(to bottom, #000428, #001a33);
}

</style>


<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'

// 原有组件导入保持不变
import AboutMeName from "./AboutMeName.vue";
import AboutMeText from "./AboutMeText.vue";
import AboutMeSkill from "./AboutMeSkill.vue";
import AboutMeCharacter from "./AboutMeCharacter.vue";
import AboutMeLife from "./AboutMeLife.vue";
import AboutMeFriendLink from "./AboutMeFriendLink.vue";

interface Star {
  x: number
  y: number
  size: number
  originalSize: number
  brightness: number
  twinkleSpeed: number
  phase: number
  isConstellation?: boolean
}

interface Meteor {
  x: number
  y: number
  size: number
  speed: number
  length: number
  angle: number
  brightness: number
  trail: { x: number, y: number }[]
  groupId: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)
const stars = ref<Star[]>([])
const constellations = ref<{ stars: { x: number, y: number }[], connected: number[][], name: string }[]>([])
const meteors = ref<Meteor[]>([])
const mouse = ref({x: -1000, y: -1000})
let animationFrameId: number
let nextMeteorGroupId = 0

// 完整的北斗七星和二十八星宿数据
const constellationData = [
  {
    name: '北斗七星',
    stars: [
      {x: 0.25, y: 0.30}, // 天枢 (Dubhe)
      {x: 0.30, y: 0.35}, // 天璇 (Merak)
      {x: 0.35, y: 0.33}, // 天玑 (Phecda)
      {x: 0.30, y: 0.28}, // 天权 (Megrez)
      {x: 0.35, y: 0.25}, // 玉衡 (Alioth)
      {x: 0.40, y: 0.20}, // 开阳 (Mizar)
      {x: 0.45, y: 0.15}  // 摇光 (Alkaid)
    ],
    connected: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
    isBigDipper: true
  },
  { // 北极星（与北斗七星相连）
    name: '北极星',
    stars: [
      {x: 0.10, y: 0.30}
    ],
    connected: [], // 从天璇连接到北极星
    isBigDipper: true // 特殊标记
  },
  {
    name: '巨蟹座',
    stars: [
      {x: 0.55, y: 0.40}, // 柳宿增十 (Tarf, β Cancri) - 最亮星(3.5等)
      {x: 0.52, y: 0.38}, // 鬼宿四 (Asellus Australis, δ Cancri)
      {x: 0.50, y: 0.42}, // 鬼宿三 (Asellus Borealis, γ Cancri)
      {x: 0.53, y: 0.45}, // 积尸增三 (Acubens, α Cancri) - 蟹钳部分
      {x: 0.48, y: 0.44}, // 巨蟹座55 (55 Cancri) - 蟹壳边缘
      {x: 0.57, y: 0.43}  // 巨蟹座ζ (Zeta Cancri) - 蟹足延伸
    ],
    connected: [
      [0, 1], [1, 2], [2, 3], [3, 0], // 蟹壳主体（四边形）
      [2, 4], [3, 5]                  // 蟹足和钳子延伸
    ]
  },
  {
    name: '处女座',
    stars: [
      {x: 0.65, y: 0.30}, // 角宿一 (Spica, α Vir) - 最亮星(1.0等)
      {x: 0.60, y: 0.35}, // 东上相 (Porrima, γ Vir) - 双星
      {x: 0.55, y: 0.40}, // 东次相 (Vindemiatrix, ε Vir)
      {x: 0.70, y: 0.45}, // 左执法 (Zavijava, β Vir)
      {x: 0.50, y: 0.50}, // 太微右垣四 (Heze, ζ Vir)
      {x: 0.75, y: 0.55}, // 右执法 (Syrma, ι Vir)
      {x: 0.45, y: 0.55}  // 亢宿增七 (μ Vir) - 麦穗末端
    ],
    connected: [
      [0,1], [1,2], [2,4], [4,6], // 主体曲线（女神躯干和麦穗）
      [0,3], [3,5]                 // 手臂延伸（执法星连线）
    ]
  },// 白羊座 (Aries)
  {
    name: '白羊座',
    stars: [
      {x: 0.20, y: 0.60}, // 娄宿三 (Hamal, α Ari)
      {x: 0.23, y: 0.58}, // 娄宿一 (Sheratan, β Ari)
      {x: 0.25, y: 0.62}  // 娄宿二 (Mesarthim, γ Ari)
    ],
    connected: [[0,1], [1,2]]
  },

  // 金牛座 (Taurus)
  {
    name: '金牛座',
    stars: [
      {x: 0.30, y: 0.50}, // 毕宿五 (Aldebaran, α Tau)
      {x: 0.35, y: 0.55}, // 五车二 (Elnath, β Tau)
      {x: 0.40, y: 0.45}, // 昴宿六 (Pleiades, M45中心)
      {x: 0.33, y: 0.48}, // 天关 (ζ Tau)
      {x: 0.28, y: 0.52}  // 新增一颗星
    ],
    connected: [[0,1], [0,3], [2,3], [1,4]] // 补充连线
  },

  // 双子座 (Gemini)
  {
    name: '双子座',
    stars: [
      {x: 0.50, y: 0.40}, // 北河三 (Pollux, β Gem)
      {x: 0.48, y: 0.42}, // 北河二 (Castor, α Gem)
      {x: 0.52, y: 0.45}, // 井宿三 (Alhena, γ Gem)
      {x: 0.45, y: 0.38}  // 天樽二 (Wasat, δ Gem)
    ],
    connected: [[0,1], [1,3], [0,2]]
  },

  // 巨蟹座 (Cancer) - 已优化
  {
    name: '巨蟹座',
    stars: [
      {x: 0.55, y: 0.30}, // 柳宿增十 (Tarf, β Cnc)
      {x: 0.52, y: 0.33}, // 鬼宿四 (δ Cnc)
      {x: 0.50, y: 0.35}, // 鬼宿三 (γ Cnc)
      {x: 0.53, y: 0.38}  // 积尸增三 (Acubens, α Cnc)
    ],
    connected: [[0,1], [1,2], [2,3]]
  },

  // 狮子座 (Leo)
  {
    name: '狮子座',
    stars: [
      {x: 0.60, y: 0.25}, // 轩辕十四 (Regulus, α Leo)
      {x: 0.65, y: 0.30}, // 轩辕十二 (Denebola, β Leo)
      {x: 0.58, y: 0.35}, // 太微右垣五 (Algieba, γ Leo)
      {x: 0.63, y: 0.20}  // 五帝座一 (δ Leo)
    ],
    connected: [[0,1], [0,2], [1,3]]
  },

  // 处女座 (Virgo) - 已优化
  {
    name: '处女座',
    stars: [
      {x: 0.70, y: 0.20}, // 角宿一 (Spica, α Vir)
      {x: 0.65, y: 0.25}, // 东上相 (Porrima, γ Vir)
      {x: 0.60, y: 0.30}, // 东次相 (ε Vir)
      {x: 0.75, y: 0.35}  // 右执法 (ι Vir)
    ],
    connected: [[0,1], [1,2], [0,3]]
  },

  // 天秤座 (Libra)
  {
    name: '天秤座',
    stars: [
      {x: 0.80, y: 0.40}, // 氐宿四 (Zubenelgenubi, α Lib)
      {x: 0.82, y: 0.45}, // 氐宿一 (Zubeneschamali, β Lib)
      {x: 0.78, y: 0.43}  // 折威七 (γ Lib)
    ],
    connected: [[0,1], [0,2]]
  },

  // 天蝎座 (Scorpius)
  {
    name: '天蝎座',
    stars: [
      {x: 0.85, y: 0.50}, // 心宿二 (Antares, α Sco)
      {x: 0.88, y: 0.55}, // 尾宿八 (Shaula, λ Sco)
      {x: 0.82, y: 0.53}, // 房宿三 (Dschubba, δ Sco)
      {x: 0.83, y: 0.58}  // 尾宿五 (Sargas, θ Sco)
    ],
    connected: [[0,1], [0,2], [1,3]]
  },

  // 射手座 (Sagittarius)
  {
    name: '射手座',
    stars: [
      {x: 0.90, y: 0.60}, // 箕宿三 (Kaus Australis, ε Sgr)
      {x: 0.88, y: 0.65}, // 斗宿四 (Nunki, σ Sgr)
      {x: 0.85, y: 0.63}, // 天渊三 (ζ Sgr)
      {x: 0.92, y: 0.62}  // 人马座λ (λ Sgr)
    ],
    connected: [[0,1], [1,2], [0,3]]
  },

  // 摩羯座 (Capricornus)
  {
    name: '摩羯座',
    stars: [
      {x: 0.80, y: 0.70}, // 牛宿二 (Deneb Algedi, δ Cap)
      {x: 0.75, y: 0.75}, // 垒壁阵四 (β Cap)
      {x: 0.82, y: 0.72}  // 牛宿一 (α Cap)
    ],
    connected: [[0,1], [0,2]]
  },

  // 水瓶座 (Aquarius)
  {
    name: '水瓶座',
    stars: [
      {x: 0.70, y: 0.80}, // 虚宿一 (Sadalsuud, β Aqr)
      {x: 0.65, y: 0.85}, // 危宿一 (Sadalmelik, α Aqr)
      {x: 0.75, y: 0.83}  // 坟墓三 (γ Aqr)
    ],
    connected: [[0,1], [0,2]]
  },

  // 双鱼座 (Pisces)
  {
    name: '双鱼座',
    stars: [
      {x: 0.60, y: 0.90}, // 外屏七 (Alrescha, α Psc)
      {x: 0.55, y: 0.85}, // 云雨三 (β Psc)
      {x: 0.65, y: 0.88}  // 右更二 (γ Psc)
    ],
    connected: [[0,1], [0,2]]
  }
]

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  ctx.value = canvas.getContext('2d')
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  initStars()
  initConstellations()
  createMeteorShower() // 初始创建流星雨
}

const resizeCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas || !ctx.value) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  initStars()
  initConstellations()
}

const initStars = () => {
  stars.value = []
  const canvas = canvasRef.value
  if (!canvas) return

  // 普通星星
  const starCount = Math.floor((canvas.width * canvas.height) / 800)

  for (let i = 0; i < starCount; i++) {
    stars.value.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.2 + 0.3,
      originalSize: Math.random() * 1.2 + 0.3,
      brightness: Math.random() * 0.5 + 0.5,
      twinkleSpeed: Math.random() * 0.05 + 0.01,
      phase: Math.random() * Math.PI * 2,
      isConstellation: false
    })
  }
}

const initConstellations = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  constellations.value = constellationData.map(constellation => {
    // 为星座星星添加一些随机偏移，使看起来更自然
    const constellationStars = constellation.stars.map(star => ({
      x: (star.x + Math.random() * 0.02 - 0.01) * canvas.width,
      y: (star.y + Math.random() * 0.02 - 0.01) * canvas.height
    }))

    // 将星座星星添加到主星星数组（比普通星星大）
    constellationStars.forEach(starPos => {


      stars.value.push({
        x: starPos.x,
        y: starPos.y,
        size: Math.random() * 1.5 + 2, // 星座星星更大
        originalSize: Math.random() * 1.5 + 2,
        brightness: Math.random() * 0.7 + 0.7,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
        isConstellation: true
      })
    })

    return {
      ...constellation,
      stars: constellationStars
    }
  })
}

const createMeteorShower = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const meteorCount = Math.floor(Math.random() * 10) + 1 // 1-10颗流星
  const groupId = nextMeteorGroupId++
  const baseAngle = Math.random() * Math.PI / 4 + Math.PI / 8 // 30-60度角

  for (let i = 0; i < meteorCount; i++) {
    const angle = baseAngle + (Math.random() * 0.2 - 0.1) // 小范围随机角度变化

    meteors.value.push({
      x: Math.random() * canvas.width * 0.7 + canvas.width * 0.3,
      y: -50 - Math.random() * 100, // 初始位置随机偏移
      size: Math.random() * 4 + 3, // 更大的流星
      speed: Math.random() * 8 + 12,
      length: Math.random() * 150 + 200,
      angle,
      brightness: 1,
      trail: [],
      groupId
    })
  }

  // 随机时间后创建下一场流星雨
  setTimeout(createMeteorShower, Math.random() * 8000 + 5000)
}

const drawStars = () => {
  const context = ctx.value
  if (!context) return

  stars.value.forEach(star => {
    // 星星闪烁效果
    // star.phase += star.twinkleSpeed
    // const twinkle = Math.sin(star.phase) * 0.2 + 0.8
    // star.size = star.originalSize * twinkle
    const twinkle = 1; // 固定亮度
    star.size = star.originalSize;

    context.beginPath()
    context.arc(star.x, star.y, star.size, 0, Math.PI * 2)
    context.closePath()

    // 星座星星更亮，普通星星较暗
    const baseAlpha = star.isConstellation ? 0.9 : 0.6
    const gradient = context.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 2
    )
    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.brightness * twinkle * baseAlpha})`)
    gradient.addColorStop(0.5, `rgba(255, 255, 255, ${star.brightness * twinkle * baseAlpha * 0.5})`)
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

    context.fillStyle = gradient
    context.fill()
  })
}

const drawConstellations = () => {
  const context = ctx.value
  if (!context) return

  constellations.value.forEach(constellation => {
    // 绘制星座连线（更明显的线条）
    context.strokeStyle = 'rgba(100, 180, 255, 0.5)'
    context.lineWidth = 1.5
    constellation.connected.forEach(pair => {
      const [start, end] = pair
      context.beginPath()
      context.moveTo(constellation.stars[start].x, constellation.stars[start].y)
      context.lineTo(constellation.stars[end].x, constellation.stars[end].y)
      context.stroke()
    })

    // 绘制星座名称
    if (constellation.stars.length > 0) {
      const firstStar = constellation.stars[0]
      context.font = '12px Arial'
      context.fillStyle = 'rgba(150, 200, 255, 0.8)'
      context.fillText(constellation.name, firstStar.x + 15, firstStar.y - 10)
    }
  })
}

const drawMeteors = () => {
  const context = ctx.value
  const canvas = canvasRef.value
  if (!context || !canvas) return

  meteors.value = meteors.value.filter(meteor => {
    // 更新流星位置
    meteor.x -= Math.cos(meteor.angle) * meteor.speed
    meteor.y += Math.sin(meteor.angle) * meteor.speed

    // 记录轨迹点
    meteor.trail.push({x: meteor.x, y: meteor.y})
    if (meteor.trail.length > 15) {
      meteor.trail.shift()
    }

    // 绘制流星尾迹（更华丽的拖尾）
    for (let i = 0; i < meteor.trail.length - 1; i++) {
      const alpha = i / meteor.trail.length
      const trailWidth = meteor.size * (1.5 - alpha * 0.8)

      context.beginPath()
      context.moveTo(meteor.trail[i].x, meteor.trail[i].y)
      context.lineTo(meteor.trail[i + 1].x, meteor.trail[i + 1].y)
      context.lineWidth = trailWidth

      // 流星尾迹颜色渐变
      const gradient = context.createLinearGradient(
          meteor.trail[i].x, meteor.trail[i].y,
          meteor.trail[i + 1].x, meteor.trail[i + 1].y
      )
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.9})`)
      gradient.addColorStop(1, `rgba(100, 180, 255, ${alpha * 0.5})`)

      context.strokeStyle = gradient
      context.stroke()
    }

    // 绘制流星头部（更亮的发光效果）
    const headGradient = context.createRadialGradient(
        meteor.x, meteor.y, 0,
        meteor.x, meteor.y, meteor.size * 2
    )
    headGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
    headGradient.addColorStop(0.7, 'rgba(200, 230, 255, 0.5)')
    headGradient.addColorStop(1, 'rgba(100, 180, 255, 0)')

    context.fillStyle = headGradient
    context.beginPath()
    context.arc(meteor.x, meteor.y, meteor.size * 2, 0, Math.PI * 2)
    context.fill()

    // 流星核心
    context.fillStyle = 'white'
    context.beginPath()
    context.arc(meteor.x, meteor.y, meteor.size * 0.8, 0, Math.PI * 2)
    context.fill()

    // 如果流星飞出画布则移除
    return meteor.x > -100 && meteor.y < canvas.height + 100
  })
}

const drawGalaxy = () => {
  const context = ctx.value
  const canvas = canvasRef.value
  if (!context || !canvas) return

  // 绘制银河背景（更明显的银河效果）
  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, 'rgba(0, 20, 80, 0.2)')
  gradient.addColorStop(0.5, 'rgba(50, 30, 120, 0.3)')
  gradient.addColorStop(1, 'rgba(0, 20, 80, 0.2)')

  context.fillStyle = gradient
  context.fillRect(0, 0, canvas.width, canvas.height)

  // 绘制星云效果（增强版）
  for (let i = 0; i < 4; i++) {
    const x = Math.random() * canvas.width
    const y = Math.random() * canvas.height
    const radius = Math.random() * 300 + 150

    const nebulaGradient = context.createRadialGradient(
        x, y, 0,
        x, y, radius
    )
    nebulaGradient.addColorStop(0, `rgba(50, ${Math.floor(Math.random() * 100 + 50)}, 255, 0.1)`)
    nebulaGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

    context.fillStyle = nebulaGradient
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
  }
}

const animate = () => {
  const canvas = canvasRef.value
  const context = ctx.value
  if (!canvas || !context) return

  // 清除画布（使用半透明清除实现拖尾效果）
  context.fillStyle = 'rgba(0, 0, 20, 0.15)'
  context.fillRect(0, 0, canvas.width, canvas.height)

  // 绘制各种元素
  drawGalaxy()
  drawStars()
  drawConstellations()
  drawMeteors()

  animationFrameId = requestAnimationFrame(animate)
}

const handleMouseMove = (event: MouseEvent) => {
  mouse.value.x = event.clientX
  mouse.value.y = event.clientY
}

onMounted(() => {
  initCanvas()
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  cancelAnimationFrame(animationFrameId)
})

</script>


