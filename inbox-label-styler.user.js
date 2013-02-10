// ==UserScript== 
// @name Gmail Styler
// @description Change Inbox message style in All Mail view
// @match http://mail.google.com/*
// @match https://mail.google.com/*
// ==/UserScript== 

var unread_inbox_ckbox_xpath = "//tr[@class='zA zE']//div[@role='checkbox' and ../../td[.//div[@title='Inbox' and @class='at']]]";
var justread_inbox_ckbox_xpath = "//tr[@class='zA yO']//div[@role='checkbox' and @ymark='on' and ../../td[.//div[@title='Inbox' and @class='at']]]";

//var unread_inbox_label_xpath = "//tr[@class='zA zE']//div[@title='Inbox' and @class='at']]";
//var unread_inbox_label_container_xpath = "//tr[@class='zA zE']//div[@class='ar as' and ..//div[@title='Inbox' and @class='at']]";
//var unread_inbox_msg_xpath = "//tr[@class='zA zE']//div[@class='y6' and ..//div[@title='Inbox' and @class='at']]"


function ils_main() {
  //var inbox_msg_nodes = document.evaluate(
  //  unread_inbox_msg_xpath,
  //  document,
  //  null,
  //  XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
  //  null);
  //for (var i = 0; i < inbox_msg_nodes.snapshotLength; ++i) {
  //  var node = inbox_msg_nodes.snapshotItem(i);
  //  node.setAttribute('style', 'background-color:lightpink;');
  //  node.createAttribute('readstate', 'unread');
  //}

  var inbox_label_nodes;
  inbox_label_nodes = document.evaluate(
    unread_inbox_ckbox_xpath,
    document.body,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
  for (var i = 0; i < inbox_label_nodes.snapshotLength; ++i) {
    var node = inbox_label_nodes.snapshotItem(i);
    node.setAttribute('style', 'background-color:lime;');
    node.setAttribute('ymark', 'on');
  }
  //console.debug(inbox_label_nodes.snapshotLength + " unread inbox msg");

  inbox_label_nodes = document.evaluate(
    justread_inbox_ckbox_xpath,
    document.body,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
  for (var i = 0; i < inbox_label_nodes.snapshotLength; ++i) {
    var node = inbox_label_nodes.snapshotItem(i);
    node.setAttribute('style', '');
    node.setAttribute('ymark', '');
  }
  //console.debug(inbox_label_nodes.snapshotLength + " just read inbox msg");
}

window.addEventListener("load", function() { ils_main(); }, false);
window.addEventListener("change", function() { ils_main(); }, false);
window.addEventListener("hashchange", function() { ils_main(); }, false);

var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
  if(timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(ils_main, 500);
}, false);
