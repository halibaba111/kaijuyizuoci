/**
 * Lamps 广告运行时配置。作品 ID 由平台上传返回，上架前填入 gameId。
 * forward_source 第一段用 gameId 或 workSessionId，不是会话 id。
 * workSessionId 是字符串，不要按数字校验。
 */
window.LAMPS_CONFIG = window.LAMPS_CONFIG || {
  gameId: "",
  // 开放平台上传返回的作品 id（字符串），forward_source 第一段优先用它
  workSessionId: "5456299a-91dc-40f7-9f89-1400ba1da8b8",
};
if (window.LAMPS_CONFIG.workSessionId == null) {
  window.LAMPS_CONFIG.workSessionId = "";
}
window.__LAMPS_GAME_ID__ = window.__LAMPS_GAME_ID__ || "";
