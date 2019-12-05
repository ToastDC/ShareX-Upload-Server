const fs = require('fs');
const utils = require('../../util/randomToken');
const path = require('path')
module.exports = {
    command: 'shorten',
    description: 'Shorten a link',
    syntax: '{PREFIX}shorten [fileName]',
    execute: async (_this, msg, args) => {
        if (!args.join(' ')) return msg.channel.createMessage('No arguments were given.');
        const URL = args.join(' ');
        const protocol = (this.secure? "https" : "http");
        const fileName = utils(this.c.shortUrlLength);
        const host = this.discordURL;
        const stream = fs.createWriteStream(`${__dirname}/../../server/uploads/${fileName}.html`);
        console.log(`${fileName}`)
        console.log(path.resolve(`${__dirname}/../../server`))
        console.log(this.shortUrlLength)
        /*stream.once('open', () => {
            stream.write(`<meta http-equiv="refresh" content="0;URL='${URL}'" />`);
            stream.end();
            msg.channel.createMessage(msg.channel, `Link shortened! ${protocol}://${host}/${fileName}`)
            if (msg.channel !== this.monitorChannel) this.monitorChannel.createMessage(`\`\`\`MARKDOWN\n[NEW][SHORT URL]\n[URL](${URL})\n[NEW](${protocol}://${host}/${fileName})\n[Discord Shortener]\n\`\`\``);
            this.log.verbose(`New Short URL: ${protocol}://${discordURL}/${fileName} | Discord User`);
            this.db.get('files')
                .push({ path: `/${fileName}`, Discord, views: 0 })
                .write();
            return res.end();
        });*/
    }
}