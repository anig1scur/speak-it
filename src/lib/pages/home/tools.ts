import pinyin from 'pinyin';

//  ('非常有趣', '一般般吧' ) ===> "非(yi)常(ban)有(ban)趣(ba)"

export const generateZhuYinXinShengTi = (fake: string, real: string) => {
  const realPinyin = pinyin(real, {
    style: pinyin.STYLE_TONE,
  });
  let result = '';
  for (let i = 0; i < fake.length; i++) {
    result += fake[i] + '(' + realPinyin[i] + ')';
  }
  return result;
};
