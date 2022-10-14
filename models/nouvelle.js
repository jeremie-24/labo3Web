const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(category, title, text, imageUrl, date) {
            super();
            this.Category = category !== undefined ? category : "";
            this.Title = title !== undefined ? title : "";
            this.Text = text !== undefined ? text : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            //this.Date = Date.now();
            this.Date = date !== undefined ? date : "";

            this.setKey("Title");
            this.addValidator('Category', 'string');
            this.addValidator('Title', 'string');
            this.addValidator('Text', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Date', "integer");
        }
    }