export const SHADER_VERTEX = `
  varying vec2 vUv;
  varying float vWave;

  uniform float uTime;
  uniform float uWaveAmplitude;

  void main() {
    vUv = uv;

    vec3 pos = position;
    float wave = sin(pos.y * 8.0 + uTime * 0.5) * uWaveAmplitude;
    pos += normal * wave;

    vWave = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

export const SHADER_FRAGMENT = `
  varying vec2 vUv;
  varying float vWave;

  uniform float uTime;
  uniform sampler2D uGradientMap;

  void main() {
    vec3 baseColor = vec3(0.2, 0.8, 0.7);
    vec3 accentColor = vec3(0.1, 0.7, 0.9);

    float pattern = sin(vUv.x * 20.0) * cos(vUv.y * 15.0);
    float pulse = sin(uTime * 0.5) * 0.5 + 0.5;

    vec3 finalColor = mix(baseColor, accentColor, pattern * pulse);
    finalColor += vec3(vWave * 0.3);

    gl_FragColor = vec4(finalColor, 0.85);
  }
`
