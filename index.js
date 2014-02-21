
/**
 * Draw rounded rectangle on canvas.
 *
 * @see http://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} node
 * @api public
 */

module.exports = function(ctx, node){
  var x = node.x;
  var y = node.y;
  var width = node.width;
  var height = node.height;
  var radius = node.radius;

  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();

  if (node.fill) {
    ctx.fillStyle = node.fill.style;
    ctx.fill();
  }

  if (node.stroke) {
    ctx.strokeStyle = node.stroke.style;
    ctx.lineWidth = node.stroke.width;
    ctx.stroke();
  }
}