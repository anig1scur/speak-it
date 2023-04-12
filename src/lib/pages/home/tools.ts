import pinyin from "pinyin";

// ! withPinyin ===> ('非常有趣', '一般般吧' ) ===> "非(一)常(般)有(般)趣(吧)"
//  ('非常有趣', '一般般吧' ) ===> "非(yi)常(ban)有(ban)趣(ba)"

export type Config = {
  withPinyin: boolean;
  withTone: boolean;
};

export const generateZhuYinXinShengTi = (fake: string, real: string, config: Config) => {
  if (!config.withPinyin)
    return fake
      .split("")
      .map((char, index) => `${char}(${real[index]})`)
      .join("");

  const realPinyin = pinyin(real, {
    style: config.withTone ? pinyin.STYLE_TONE : pinyin.MODE_NORMAL,
  });
  let result = "";
  for (let i = 0; i < fake.length; i++) {
    const realChar = realPinyin[i];
    if (realChar) {
      result += `${fake[i]}(${realChar})`;
    } else {
      result += fake[i];
    }
  }
  return result;
};
