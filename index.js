const empty = "[NONE]";
var titleField = document.getElementById("title");
var descriptionField = document.getElementById("pull-request-description");

var ticket = prompt("JIRA ticket number");
var title = prompt("Title") || title.value;
var env = prompt("Environment deployed to");
var design = prompt("Design URL");

ticket = ticket ? `GSFE-${ticket.match(/[0-9]+/)[0]}` : ticket;
title.value = ticket ? `${ticket}: ${title.value}` : title.value;
jiraUrl = ticket
  ? `https://tools.skybet.net/jira/browse/${ticket.match(/[0-9]+/)[0]}`
  : empty;
demoUrl = env
  ? `https://sports${
      env[env.length - 1]
    }.gstp.test.skybet.net/?siteId=9d7a254b-63a9-43be-8682-9c0758674702`
  : empty;
designUrl = design || empty;

descriptionField.value = `**JIRA** ${jiraUrl}\n***\n**DEMO** ${demoUrl}\n***\n**DESIGN** ${designUrl}\n***\n#### DESCRIPTION\n...`;
descriptionField.focus();
