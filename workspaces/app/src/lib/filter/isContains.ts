type Params = {
  query: string;
  target: string;
};

// ひらがな・カタカナ・半角・全角を区別せずに文字列が含まれているかを調べる
export function isContains({ query, target }: Params): boolean {
  return target.toLowerCase().includes(query.toLowerCase());
}

// カタカナ→ひらがな変換をして検索
export function isContainsHira({ query, target }: Params): boolean {
  const newTarget = target.replace(/[\u30a1-\u30f6]/g, function(match) {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
  const newQuery = query.replace(/[\u30a1-\u30f6]/g, function(match) {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
  return newTarget.toLowerCase().includes(newQuery.toLowerCase());
}

// ひらがな→カタカナ変換をして検索
export function isContainsKana({ query, target }: Params): boolean {
  const newTarget = target.replace(/[\u3041-\u3096]/g, function(match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
  const newQuery = query.replace(/[\u3041-\u3096]/g, function(match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
  return newTarget.toLowerCase().includes(newQuery.toLowerCase());
}
