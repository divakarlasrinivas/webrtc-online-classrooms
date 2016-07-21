module.exports.SocketEvent = {
  JOIN_ROOM: "JOIN_ROOM",
  ROOM_INFO: "ROOM_INFO",
  REQ_PRESENTER: "REQ_PRESENTER",
  REJECT_PRESENTER: "REJECT_PRESENTER",
  ACCEPT_PRESENTER: "ACCEPT_PRESENTER",
  STOP_PRESENTER: "STOP_PRESENTER",
  SET_SNAPSHOT: "SET_SNAPSHOT",
  SET_PDF_FILE: "SET_PDF_FILE",
  PRESENTATION_STOP: "PRESENTATION_STOP",
  PRESENTATION_START: "PRESENTATION_START",
  SET_PAGE: "SET_PAGE"
};
module.exports.SERVER_IP = require(__dirname + '/../../config').serverIp;
