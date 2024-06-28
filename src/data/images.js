const images = [
  {
    _id: "_101",
    name: "Stardew Valley",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
  },
  {
    _id: "_102",
    name: "Stardew Valley",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot01",
  },
  {
    _id: "_103",
    name: "Stardew Valley",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot03",
  },
  {
    _id: "_104",
    name: "Stardew Valley",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot04",
  },
  {
    _id: "_105",
    name: "Stardew Valley",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot05",
  },
  {
    _id: "_106",
    name: "Stardew Valley",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot06",
  },
  {
    _id: "_107",
    name: "Stardew Valley",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot02",
  },

  // test data

  {
    _id: "1",
    name: "My Time at Portia",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000004651/a52346fa3eeb45c7ccd23985e659a21df452a802bd0b105f666ab6231fd468ab",
  },
  {
    _id: "2",
    name: "Potion Permit",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000035808/c7e2f6fa63ac0ababd1c5806a3cf7da9de6a845aeca106c707f4204c817fdd40",
  },
  {
    _id: "3",
    name: "Ooblets",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000048967/06239b4e0fc9c468b2e031e7df0add51a23f0c2dd2b4fb6107d1cd886675043b",
  },
  {
    _id: "4",
    name: "Bear and Breakfast",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000028856/fd32dfc61be7d9f6d8f6d3e979b347d24386331dffe8410809704a8d38caf96d",
  },
  {
    _id: "5",
    name: "Wytchwood",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000042326/bdf80cbf9dc396b710189e940e2590a12f42eadfe89085f4c51fb6d34784c22a",
  },
  {
    _id: "6",
    name: "Cozy Grove",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000035711/e20cef68d8e08b6115e8880f1f4dca2ce901236eb887d77b32f1555108b72317",
  },
  {
    _id: "7",
    name: "Garden Story",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000032052/e018d597844e528acda9c4cea06f01e3e8a09967b5f16d9e021b2ecda9682277",
  },
  {
    _id: "8",
    name: "Turnip Boy Commits Tax Evasion",
    big_image:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/games/switch/t/turnip-boy-commits-tax-evasion-switch/hero",
  },
];

export function getImages(name) {
  return images.filter((image) => image.name === name);
}
