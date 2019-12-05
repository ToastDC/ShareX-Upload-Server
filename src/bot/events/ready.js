async function ready() {
    this.log.success('Discord API monitor successfully logged in');
    this.monitorChannel = this.c.discordChannelID;
    this.dURL = this.c.discordURL;
    this.secure = this.c.secure; 
    this.shortUrlLength = this.c.shortUrlLength;
    this.bot.createMessage(this.monitorChannel, `Server started!`);
}
module.exports = ready;
