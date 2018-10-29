const BaseTrack = require('./BaseTrack');

function VKTrack(options) {
  BaseTrack.call(this, options);

  this.trackType = 'VKTrack';
  this._trackUrlPrefix = 'https://www.vk.com/';
}

VKTrack.prototype = Object.create(BaseTrack.prototype);

VKTrack.prototype.constructor = VKTrack;

VKTrack.prototype.init = function(options) {
  if (!options.url) {
    console.error('VKTrack');
    console.error(options);
  }
  else {
    this.platformId = options.url.replace(this._trackUrlPrefix, '');

    if (options.name) {
      this.title = options.name;
    }

    if (options.user && options.user.username) {
      this.artist = options.user.name;
    }

    if (options.pictures) {
      this.covers.default = options.pictures['320wx320h'];
      this.covers.large = this.covers.default;
      this.covers.medium = options.pictures.large;
    }
  }
};

module.exports = VKTrack;
