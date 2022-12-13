AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [{
      id: "spider-man",
      title: "Spider Man",
      url: "./assets/thumbnails/spider-man.jpg",
    }, {
      id: "iron-man",
      title: "Iron Man",
      url: "./assets/thumbnails/iron-man.jpg",
    },

    {
      id: "thor",
      title: "Thor",
      url: "./assets/thumbnails/thor.jpg",
    }, {
      id: "batman",
      title: "Batman",
      url: "./assets/thumbnails/batman.jpg",
    }
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = {
        x: posX,
        y: posY,
        z: posZ
      };
      prevoiusXPosition = posX;

      // Border Element
      const bordere1 = this.createBorder(position, item.id);
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item);
      bordere1.appendChild(thumbnail);
      // Title Text Element
      const titlee1 = this.createTitle(position, item);
      bordere1.appendChild(titlee1)
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const e1 = document.createElement('a-entity');
    e1.setAttribute('id', id);
    e1.setAttribute('visible', true);
    e1.setAttribute('geometry', {
      primitive: 'ring',
      radiusInner: 9,
      radiusOuter: 10
    });
    e1.setAttribute('position', position);
    e1.setAttribute('material', {
      color: '#1177cc',
      opacity: 1
    });
    return e1;
  },
  createThumbnail: function (item) {
    const e1 = document.createElement('a-entity');
    e1.setAttribute('visible', true);
    e1.setAttribute('geometry', {
      primitive: 'circle',
      radius: 9
    });
    e1.setAttribute('material', {
      src: item.url
    })
    return e1;
  },
  createTitle: function (position, item) {
    const e1 = document.createElement('a-entity');
    e1.setAttribute('text', {
      font: mozillavr,
      align: 'center',
      width: 70,
      color: '#e65100',
      value: item.title
    });
    const e1Position = position;
    e1Position.y = -20;
    e1.setAttribute('position', e1Position);
    e1.setAttribute('visible', true);
    return e1;
  }
});