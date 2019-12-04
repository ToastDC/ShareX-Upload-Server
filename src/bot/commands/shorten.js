const fs = require('fs');

module.exports = {
    command: 'shorten',
    description: 'Shorten a link',
    syntax: '{PREFIX}shorten [fileName]',
    execute: async (_this, msg, args) => {
        if (!args.join(' ')) return msg.channel.createMessage('No arguments were given.');
        const URL = args.join(' ');
        const protocol = (this.c.secure? "https" : "http");
        const fileName = this.randomToken(this.c.shortUrlLength);
        const host = this.discordURL;
        const stream = fs.createWriteStream(`${__dirname}/../uploads/${fileName}.html`);
        stream.once('open', () => {
            stream.write(`<meta http-equiv="refresh" content="0;URL='${URL}'" />`);
            stream.end();
            this.bot.createMessage(msg.channel, `Link shortened! ${protocol}://${host}/${fileName}`)
            if (msg.channel !== this.monitorChannel) this.bot.createMessage(this.monitorChannel, `\`\`\`MARKDOWN\n[NEW][SHORT URL]\n[URL](${URL})\n[NEW](${protocol}://${host}/${fileName})\n[Discord Shortener]\n\`\`\``);
            this.log.verbose(`New Short URL: ${protocol}://${discordURL}/${fileName} | Discord User`);
            this.db.get('files')
                .push({ path: `/${fileName}`, Discord, views: 0 })
                .write();
            return res.end();
        });        
    }
}