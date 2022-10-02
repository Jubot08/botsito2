let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
𝓬𝓻𝓮𝓪𝓭𝓸𝓻𝓮𝓼 𝓭𝓮 𝓮𝓼𝓽𝓮 𝓫𝓸𝓽
𝓙𝓗𝓞𝓝𝓜𝓔𝓝𝓓𝓔𝓩
𝗕𝗥𝗨𝗡𝗢 𝗦𝗢𝗕𝗥𝗜𝗡𝗢
*—◉ P͓̽U͓̽E͓̽D͓̽E͓̽ ͓̽S͓̽E͓̽G͓̽U͓̽I͓̽R͓̽ ͓̽A͓̽L͓̽ ͓̽B͓̽O͓̽T͓̽ ͓̽E͓̽N͓̽ ͓̽Y͓̽O͓̽O͓̽T͓̽U͓̽B͓̽E͓̽ ͓̽D͓̽O͓̽N͓̽D͓̽E͓̽ ͓̽P͓̽R͓̽O͓̽X͓̽I͓̽M͓̽A͓̽M͓̽E͓̽N͓̽T͓̽E͓̽ ͓̽E͓̽L͓̽ ͓̽B͓̽O͓̽T͓̽ ͓̽E͓̽S͓̽T͓̽A͓̽R͓̽A͓̽ ͓̽P͓̽A͓̽R͓̽A͓̽ ͓̽T͓̽U͓̽ ͓̽U͓̽S͓̽O͓̽*
*◉ https://www.youtube.com/channel/UCdPOQ4Wn6zNu8P3e98rXZwg*`
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `「  F͓̽U͓̽C͓̽K͓̽ ͓̽Y͓̽O͓̽U͓̽ 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://www.youtube.com/channel/UCdPOQ4Wn6zNu8P3e98rXZwg',
'mediaType': 2,
'previewType': 'pdf',
'title': 'βටͲ ϩ⊘ϩӠ,
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCdPOQ4Wn6zNu8P3e98rXZwg' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: 'youtubebot'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|sryt|bots|subbots|getcode)/i
export default handler

