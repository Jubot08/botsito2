let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var documento = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*síguenos en tiktok tiktok.com/@fenix_bot57 *`
let buttonMessage= {
'documento': { URL: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'tipo mime': `aplicación/${documento}`,
'fileName': `「 𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'longitud del archivo': 99999999999999,
'contador de páginas': 200,
'información de contexto': {
'puntuación de reenvío': 200,
'isForwarded': verdadero,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'tipo de medio': 2,
'tipo de vista previa': 'pdf',
'título': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ',
'cuerpo': wm,
'miniatura': imagen1,
'url fuente': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'título': texto1,
'pie de página': wm,
'botones':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, tipo: 1},
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, tipo: 1}],
'tipo de encabezado': 6 }
conn.sendMessage(m.chat, buttonMessage, { citado: m })}
controlador.comando = ['ytbot','ytbot']
controlador predeterminado de exportación
