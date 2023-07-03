{
    "command": [
      {
        "name": "kick",
        "actions": [
          {
            "name": "get user kicked",
            "category": "Variable",
            "type": "Get Mentioned User",
            "messageActionRows": [],
            "varname": "kickUser",
            "vartype": "User",
            "savevartype": "temp"
          },
          {
            "name": "Check kick Perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "get kick reason",
                "category": "Variable",
                "type": "Store Value in Variable",
                "messageActionRows": [],
                "varname": "kickReason",
                "vartype": "Text",
                "savevartype": "temp",
                "param": "1"
              },
              {
                "name": "kick them",
                "category": "User Action",
                "type": "Kick User",
                "messageActionRows": [],
                "user": "${tempVars.kickUser.id}",
                "reason": "${tempVars.kickReason}"
              },
              {
                "name": "Log_kick",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FFFF00",
                "title": "User Kicked",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${tempVars.kickUser.user.avatarURL}",
                "authorlink": "",
                "description": "**Member :** **${tempVars.kickUser.displayName}**\n**Staff :** **${dbsVars.CommandAuthor.displayName}**\n**Reason :** **${tempVars.kickReason}**",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124300107366531113/kick.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "falseActions": [
              {
                "name": "CmdFailDueToPerms_1",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Command Failed",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "You don't have permissions to use this command.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124340314455416893/remove.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": []
          }
        ]
      },
      {
        "name": "purge",
        "actions": [
          {
            "name": "get count",
            "category": "Variable",
            "type": "Store Value in Variable",
            "messageActionRows": [],
            "varname": "purgeNumber",
            "vartype": "Number",
            "savevartype": "temp",
            "param": "1"
          },
          {
            "name": "Check Message Manage perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "purge messages",
                "category": "Channel Action",
                "type": "Delete All Messages",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "msgcount": "${tempVars.purgeNumber}"
              }
            ],
            "falseActions": [
              {
                "name": "CmdFailDueToPerms_2",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Command Failed",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "You don't have permissions to use this command.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124340314455416893/remove.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": [
              "MANAGE_MESSAGES"
            ]
          }
        ]
      },
      {
        "name": "trial",
        "actions": [
          {
            "name": "get trial user",
            "category": "Variable",
            "type": "Get Mentioned User",
            "messageActionRows": [],
            "varname": "trialUser",
            "vartype": "User",
            "savevartype": "temp"
          },
          {
            "name": "Check Roles Add/Remove Perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "checkTrial",
                "category": "User Action",
                "type": "Check If User Has Role",
                "trueActions": [
                  {
                    "name": "User already have trial",
                    "category": "Message",
                    "type": "Send Embed",
                    "messageActionRows": [
                      {
                        "rowtype": "button",
                        "buttons": [
                          {
                            "label": "Remove Trial",
                            "customid": "removeTrial",
                            "style": "DANGER",
                            "emoji": "",
                            "URL": "",
                            "ephemeral": false
                          }
                        ]
                      }
                    ],
                    "channelname": "${dbsVars.CommandChannel.id}",
                    "color": "FF0000",
                    "title": "Trial Moderator: Error",
                    "url": "",
                    "authorname": "Ceraphim Utilities",
                    "authorimageurl": "",
                    "authorlink": "",
                    "description": "**<@${tempVars.trialUser.id}>** already have <@&1123608011378798734>.",
                    "thumbnail": "${tempVars.trialUser.user.avatarURL}",
                    "image": "",
                    "footer": "",
                    "timestamp": "BOOL_TRUE@@",
                    "savetovariable": "",
                    "savetovariabletype": "temp"
                  }
                ],
                "falseActions": [
                  {
                    "name": "add trial to user",
                    "category": "User Action",
                    "type": "Add Role to User",
                    "messageActionRows": [],
                    "user": "${tempVars.trialUser.id}",
                    "rolename": "Trial Moderator"
                  },
                  {
                    "name": "trialLog",
                    "category": "Message",
                    "type": "Send Embed",
                    "messageActionRows": [],
                    "channelname": "${dbsVars.CommandChannel.id}",
                    "color": "1B9DE5",
                    "title": "Trial Moderator",
                    "url": "",
                    "authorname": "Ceraphim utilities",
                    "authorimageurl": "",
                    "authorlink": "",
                    "description": "**<@${tempVars.trialUser.id}>** is appointed as:<@&1123608011378798734>.",
                    "thumbnail": "${tempVars.trialUser.user.avatarURL}",
                    "image": "",
                    "footer": "",
                    "timestamp": "BOOL_TRUE@@",
                    "savetovariable": "",
                    "savetovariabletype": "temp"
                  }
                ],
                "messageActionRows": [],
                "user": "${tempVars.trialUser.id}",
                "role": "Trial Moderator"
              }
            ],
            "falseActions": [],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": [
              "MANAGE_ROLES"
            ]
          }
        ]
      },
      {
        "name": "ban",
        "actions": [
          {
            "name": "get user banned",
            "category": "Variable",
            "type": "Get Mentioned User",
            "messageActionRows": [],
            "varname": "banUser",
            "vartype": "User",
            "savevartype": "temp"
          },
          {
            "name": "Check Ban Perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "get ban reason",
                "category": "Variable",
                "type": "Store Value in Variable",
                "messageActionRows": [],
                "varname": "banReason",
                "vartype": "Text",
                "savevartype": "temp",
                "param": "2"
              },
              {
                "name": "get days",
                "category": "Variable",
                "type": "Store Value in Variable",
                "messageActionRows": [],
                "varname": "banDays",
                "vartype": "Number",
                "savevartype": "temp",
                "param": "3"
              },
              {
                "name": "ban them",
                "category": "User Action",
                "type": "Ban User",
                "messageActionRows": [],
                "user": "${tempVars.banUser.id}",
                "reason": "${tempVars.banReason}",
                "days": "${tempVars.banDays}"
              },
              {
                "name": "Log_ban",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FFFF00",
                "title": "User Banned",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${tempVars.banUser.displayName}",
                "authorlink": "",
                "description": "**Member :** **${tempVars.banUser.displayName}**\n**Staff :** **${dbsVars.CommandAuthor.displayName}**\n**Reason :** **${tempVars.banReason}**",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124300107949539388/block-user.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "falseActions": [
              {
                "name": "CmdFailDueToPerms",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Command Failed",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "You don't have permissions to use this command.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124340314455416893/remove.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": [
              "BAN_MEMBERS"
            ]
          }
        ]
      },
      {
        "name": "dm",
        "perms": [],
        "actions": [
          {
            "name": "get user",
            "category": "Variable",
            "type": "Get Mentioned User",
            "messageActionRows": [],
            "varname": "dmUser",
            "vartype": "User",
            "savevartype": "temp"
          },
          {
            "name": "Dm User",
            "category": "Message",
            "type": "Send DM",
            "messageActionRows": [],
            "msgtype": "msg",
            "userid": "${tempVars.dmUser.id}",
            "msg": "YUH",
            "color": "00FF08",
            "title": "This is a Embed send in DM by the BOT.",
            "url": "",
            "author": "Ceraphim Utilities",
            "description": "",
            "thumbnail": "",
            "image": "",
            "timestamp": ""
          },
          {
            "name": "Check1",
            "category": "Message",
            "type": "Send Message",
            "messageActionRows": [],
            "channelname": "${dbsVars.CommandChannel.id}",
            "messagetext": "Yuh this message is meant to be sent in the command channel.",
            "savetovariable": "",
            "savetovariabletype": "temp"
          }
        ]
      },
      {
        "name": "mute",
        "actions": [
          {
            "name": "get user to mute",
            "category": "Variable",
            "type": "Get Mentioned User",
            "messageActionRows": [],
            "varname": "muteUser",
            "vartype": "User",
            "savevartype": "temp"
          },
          {
            "name": "Check Mute Perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "get mute reason",
                "category": "Variable",
                "type": "Store Value in Variable",
                "messageActionRows": [],
                "varname": "muteReason",
                "vartype": "Text",
                "savevartype": "temp",
                "param": "2"
              },
              {
                "name": "mute them",
                "category": "User Action",
                "type": "Add Role to User",
                "messageActionRows": [],
                "user": "${tempVars.muteUser.id}",
                "rolename": "Muted"
              },
              {
                "name": "Remove Member Role",
                "category": "User Action",
                "type": "Remove Role From User",
                "messageActionRows": [],
                "user": "${tempVars.unmuteUser.id}",
                "rolename": "╰•★★ Member ★★•╯",
                "reason": "nuh"
              },
              {
                "name": "Log_muteUser",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FFFF00",
                "title": "User Muted",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "**User :** **<@${tempVars.muteUser.id}>**\n**Staff :** **<@${dbsVars.CommandAuthor.id}>**\n**Reason :** **${tempVars.muteReason}**",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124300107647561760/no-speak.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "falseActions": [
              {
                "name": "CmdFailDueToPerms_3",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Command Failed",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "You don't have permissions to use this command.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124340314455416893/remove.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": [
              "MUTE_MEMBERS"
            ]
          }
        ]
      },
      {
        "name": "unmute",
        "perms": [],
        "actions": [
          {
            "name": "get user to unmute",
            "category": "Variable",
            "type": "Get Mentioned User",
            "messageActionRows": [],
            "varname": "unmuteUser",
            "vartype": "User",
            "savevartype": "temp"
          },
          {
            "name": "Check Unmute Perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "unmute them",
                "category": "User Action",
                "type": "Remove Role From User",
                "messageActionRows": [],
                "user": "${tempVars.unmuteUser.id}",
                "rolename": "Muted",
                "reason": "nuh"
              },
              {
                "name": "Add Member Role",
                "category": "User Action",
                "type": "Add Role to User",
                "messageActionRows": [],
                "user": "${tempVars.unmuteUser.id}",
                "rolename": "╰•★★ Member ★★•╯"
              },
              {
                "name": "Log_unmuteuser",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "03FF03",
                "title": "User Unmuted",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "**User :** **<@${tempVars.unmuteUser.id}>**\n**Staff :** **<@${dbsVars.CommandAuthor.id}>**",
                "thumbnail": "",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "falseActions": [
              {
                "name": "CmdFailDueToPerms_4",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Command Failed",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "You don't have permissions to use this command.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124340314455416893/remove.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": [
              "MUTE_MEMBERS"
            ]
          }
        ]
      },
      {
        "name": "unban",
        "actions": [
          {
            "name": "get user unbanned",
            "category": "Variable",
            "type": "Store Value in Variable",
            "messageActionRows": [],
            "varname": "unbanUser",
            "vartype": "Number",
            "savevartype": "temp",
            "param": "1"
          },
          {
            "name": "Check Unban Perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "unban them",
                "category": "User Action",
                "type": "Unban",
                "messageActionRows": [],
                "id": "${tempVars.unbanUser}"
              },
              {
                "name": "Log_unbanuser",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "00FF00",
                "title": "User Unbanned",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "**Member :**${tempVars.unbanUser}**\n**Staff :** **${dbsVars.CommandAuthor.displayName}**\n",
                "thumbnail": "",
                "image": "",
                "footer": "",
                "timestamp": "false",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "falseActions": [
              {
                "name": "CmdFailDueToPerms_5",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Command Failed",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "You don't have permissions to use this command.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124340314455416893/remove.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": [
              "BAN_MEMBERS"
            ]
          }
        ]
      },
      {
        "name": "warn",
        "actions": [
          {
            "name": "get user to warn",
            "category": "Variable",
            "type": "Get Mentioned User",
            "messageActionRows": [],
            "varname": "warnUser",
            "vartype": "User",
            "savevartype": "temp"
          },
          {
            "name": "Check Warn Perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "get warn reason",
                "category": "Variable",
                "type": "Store Value in Variable",
                "messageActionRows": [],
                "varname": "warnReason",
                "vartype": "Text",
                "savevartype": "temp",
                "param": "2"
              },
              {
                "name": "warn them",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Warned ${tempVars.warnUser.displayName}",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "**User :** **<@${tempVars.warnUser.id}>** was warned by **<@${dbsVars.CommandAuthor.id}>** for **${tempVars.warnReason}**.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124611267722747914/risk-management.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              },
              {
                "name": "Log_warn_DM",
                "category": "Message",
                "type": "Send DM",
                "messageActionRows": [],
                "msgtype": "embed",
                "userid": "${tempVars.warnUser.id}",
                "msg": "",
                "color": "FF0000",
                "title": "Your were warned in Ceraphim",
                "url": "",
                "author": "Ceraphim Utilities",
                "description": "**By ** **${dbsVars.CommandAuthor.displayName}** for **${tempVars.warnReason}**.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124611267722747914/risk-management.png",
                "image": "",
                "timestamp": ""
              }
            ],
            "falseActions": [
              {
                "name": "CmdFailDueToPerms_6",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Command Failed",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "You don't have permissions to use this command.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124340314455416893/remove.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": [
              "MANAGE_MESSAGES"
            ]
          }
        ]
      },
      {
        "name": "level",
        "actions": [
          {
            "name": "Get xp",
            "category": "User Data",
            "type": "Get User Data",
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "field": "xp",
            "varname": "xp",
            "savevartype": "temp",
            "vartype": "User"
          },
          {
            "name": "Get xp_1",
            "category": "User Data",
            "type": "Get User Data",
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "field": "lvl",
            "varname": "lvl",
            "savevartype": "temp",
            "vartype": "User"
          },
          {
            "name": "SendLvL",
            "category": "Message",
            "type": "Send Message",
            "messageActionRows": [],
            "channelname": "${dbsVars.CommandChannel.id}",
            "messagetext": "Level: **${tempVars.lvl}**\nXP: **${tempVars.xp}**",
            "savetovariable": "",
            "savetovariabletype": "temp"
          }
        ]
      },
      {
        "name": "timeout",
        "actions": [
          {
            "name": "get user to timeout",
            "category": "Variable",
            "type": "Get Mentioned User",
            "messageActionRows": [],
            "varname": "timeoutUser",
            "vartype": "User",
            "savevartype": "temp"
          },
          {
            "name": "Check Timeout Perms",
            "category": "User Action",
            "type": "Check User Permissions",
            "trueActions": [
              {
                "name": "get timeout time",
                "category": "Variable",
                "type": "Store Value in Variable",
                "messageActionRows": [],
                "varname": "timeoutTime",
                "vartype": "Text",
                "savevartype": "temp",
                "param": "3"
              },
              {
                "name": "get timeout reason",
                "category": "Variable",
                "type": "Store Value in Variable",
                "messageActionRows": [],
                "varname": "timeoutReason",
                "vartype": "Text",
                "savevartype": "temp",
                "param": "2"
              },
              {
                "name": "timeout them",
                "category": "User Action",
                "type": "Timeout",
                "messageActionRows": [],
                "user": "${tempVars.timeoutUser.id}",
                "time": "${tempVars.timeoutTime}",
                "reason": "${tempVars.timeoutReason}"
              },
              {
                "name": "Log_timeoutUser",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FFFF00",
                "title": "User Timed Out",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "**User :** **<@${tempVars.timeoutUser.id}>**\n**Staff :** **<@${dbsVars.CommandAuthor.id}>**\n**Reason :** **${tempVars.timeoutReason}**\n**Time :** **${tempVars.timeoutTime}**",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124723396396208199/girl.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "falseActions": [
              {
                "name": "CmdFailDueToPerms_7",
                "category": "Message",
                "type": "Send Embed",
                "messageActionRows": [],
                "channelname": "${dbsVars.CommandChannel.id}",
                "color": "FF0000",
                "title": "Command Failed",
                "url": "",
                "authorname": "Ceraphim Utilities",
                "authorimageurl": "${dbsVars.CommandAuthor.user.avatarURL}",
                "authorlink": "",
                "description": "You don't have permissions to use this command.",
                "thumbnail": "https://media.discordapp.net/attachments/1098084502787600426/1124340314455416893/remove.png",
                "image": "",
                "footer": "",
                "timestamp": "BOOL_TRUE@@",
                "savetovariable": "",
                "savetovariabletype": "temp"
              }
            ],
            "messageActionRows": [],
            "user": "${dbsVars.CommandAuthor.id}",
            "permissions": [
              "MUTE_MEMBERS"
            ]
          }
        ]
      }
    ]
  }