import * as THREE from 'three'

export const STAR_VERTEX = `
  varying vec3 vColor;
  
  attribute vec3 aColor;
  
  void main() {
    vColor = aColor;
    gl_PointSize = 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export const STAR_FRAGMENT = `
  varying vec3 vColor;
  
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    float brightness = 1.0 - dist * dist;
    gl_FragColor = vec4(vColor * brightness, brightness);
  }
`

export const createStars = () => {
  const positions = new Float32Array(200 * 3)
  const colors = new Float32Array(200 * 3)

  for (let i = 0; i < 200; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100

    const hue = Math.random()
    const color = new THREE.Color().setHSL(hue, 0.7, 0.6)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  return { positions, colors, count: 200 }
}
