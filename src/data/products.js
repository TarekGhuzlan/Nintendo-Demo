const products = [
  {
    title: "Nintendo Switch™ - OLED Model - Mario Red Edition",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_200/ncom/My%20Nintendo%20Store/EN-US/Hardware/nintendo-switch-oled-model-mario-red-edition-112872/112872-nintendo-switch-oled-model-mario-red-edition-package-1200x675",
    type: "Hardware",
  },
  {
    title: "Super Mario Bros.™ Wonder",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_200/ncom/software/switch/70010000068688/87e8aa5f1fdc950b88eae7d7c62ed185c8a6373c845090bbdb2e2cf039b38da1",
    type: "Nintendo Switch",
  },
  {
    title: "Super Mario RPG™",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_200/ncom/software/switch/70010000068683/fe4afe940b0e707798332e86f0af56cdbde48da59dc37cdfb8d59febb88ac72a",
    type: "Nintendo Switch",
  },
  {
    title: "WarioWare™: Move It!",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_200/ncom/software/switch/70010000068678/5b072b55e8a6993071b4cde9f74d9cf7aeac0b52141177efed6c8ce9b580a435",
    type: "Nintendo Switch",
  },
];

export function getProducts() {
  return products;
}
