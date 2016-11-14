(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.annotation = factory());
}(this, function () { 'use strict';

  var Annotation = function () {
      function Annotation(_a) {
          var x = _a.x,
              y = _a.y,
              dy = _a.dy,
              dx = _a.dx,
              text = _a.text,
              title = _a.title,
              data = _a.data;
          //super() calls parent's constructor
          this.x = x || 0;
          this.y = y || 0;
          this.dx = dx || 0;
          this.dy = dy || 0;
          this.text = text;
          this.title = title;
          this.data = data || {};
      }
      Object.defineProperty(Annotation.prototype, "position", {
          get: function get() {
              return { x: this.x, y: this.y };
          },
          set: function set(_a) {
              var x = _a.x,
                  y = _a.y;
              this.x = x;
              this.y = y;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Annotation.prototype, "translation", {
          get: function get() {
              return {
                  x: this.x + this.dx,
                  y: this.y + this.dy
              };
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Annotation.prototype, "json", {
          get: function get() {
              return {
                  x: this.x,
                  y: this.y,
                  dx: this.dx,
                  dy: this.dy,
                  text: this.text,
                  title: this.title,
                  data: this.data
              };
          },
          enumerable: true,
          configurable: true
      });
      return Annotation;
  }();

  var AnnotationCollection = function () {
      function AnnotationCollection(_a) {
          var annotations = _a.annotations,
              accessors = _a.accessors;
          this.annotations = annotations;
          this.accessors = accessors;
      }
      Object.defineProperty(AnnotationCollection.prototype, "json", {
          get: function get() {
              return this.annotations.map(function (a) {
                  return a.json;
              });
          },
          enumerable: true,
          configurable: true
      });
      return AnnotationCollection;
  }();

  var index = {
    Annotation: Annotation,
    AnnotationCollection: AnnotationCollection
  };

  return index;

}));
//# sourceMappingURL=annotation.js.map
