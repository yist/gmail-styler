// ==UserScript== 
// @name Gmail Styler
// @description Change Inbox messagel style in All Mail view
// @match http://mail.google.com/*
// @match https://mail.google.com/*
// ==/UserScript== 

var unread_inbox_label_xpath = "//tr[@class='zA zE']//div[@title='Inbox' and @class='at']"
var unread_inbox_msg_xpath = "//tr[@class='zA zE']//div[@class='y6' and ..//div[@title='Inbox' and @class='at']]"

function ils_main() {
  var inbox_msg_nodes = document.evaluate(
    unread_inbox_msg_xpath,
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
  for (var i = 0; i < inbox_msg_nodes.snapshotLength; ++i) {
    var node = inbox_msg_nodes.snapshotItem(i);
    node.setAttribute('style', 'background-color:lightpink;');
  }

  //var inbox_label_nodes = document.evaluate(
  //  unread_inbox_label_xpath,
  //  document,
  //  null,
  //  XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
  //  null);
  //for (var i = 0; i < inbox_label_nodes.snapshotLength; ++i) {
  //  var node = inbox_label_nodes.snapshotItem(i);
  //  node.setAttribute('style', 'background-color:#fff; border-color:red; border-width:0 6px;');
  //}

}

window.addEventListener("load", function() { ils_main(); }, false);
window.addEventListener("change", function() { ils_main(); }, false);
window.addEventListener("hashchange", function() { ils_main(); }, false);
window.addEventListener("DOMSubtreeModified", function() { ils_main(); }, false);
