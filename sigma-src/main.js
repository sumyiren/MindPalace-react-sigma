// Sigma build is quite big and not friendly for webpack, therefore we use custom import

// Core:
import "MindPalace-sigma.js/src/sigma.core.js"

// Utils:
import "MindPalace-sigma.js/src/conrad.js"
import "MindPalace-sigma.js/src/utils/sigma.utils.js"
import "MindPalace-sigma.js/src/utils/sigma.polyfills.js"

// Main classes:
import "MindPalace-sigma.js/src/sigma.settings.js"
import "MindPalace-sigma.js/src/classes/sigma.classes.dispatcher.js"
import "MindPalace-sigma.js/src/classes/sigma.classes.configurable.js"
import "MindPalace-sigma.js/src/classes/sigma.classes.graph.js"
import "MindPalace-sigma.js/src/classes/sigma.classes.camera.js"
import "MindPalace-sigma.js/src/classes/sigma.classes.quad.js"
import "MindPalace-sigma.js/src/classes/sigma.classes.edgequad.js"

// Captors:
import "MindPalace-sigma.js/src/captors/sigma.captors.mouse.js"
import "MindPalace-sigma.js/src/captors/sigma.captors.touch.js"

// Renderers:
import "MindPalace-sigma.js/src/renderers/sigma.renderers.canvas.js"

// Sub functions per engine:
import "MindPalace-sigma.js/src/renderers/canvas/sigma.canvas.labels.def.js"
import "MindPalace-sigma.js/src/renderers/canvas/sigma.canvas.hovers.def.js"
import "MindPalace-sigma.js/src/renderers/canvas/sigma.canvas.nodes.def.js"
import "MindPalace-sigma.js/src/renderers/canvas/sigma.canvas.edges.def.js"
import "MindPalace-sigma.js/src/renderers/canvas/sigma.canvas.edgehovers.def.js"
import "MindPalace-sigma.js/src/renderers/canvas/sigma.canvas.extremities.def.js"

// Middlewares:
import "MindPalace-sigma.js/src/middlewares/sigma.middlewares.rescale.js"
import "MindPalace-sigma.js/src/middlewares/sigma.middlewares.copy.js"

// Miscellaneous:
import "MindPalace-sigma.js/src/misc/sigma.misc.animation.js"
import "MindPalace-sigma.js/src/misc/sigma.misc.bindEvents.js"
import "MindPalace-sigma.js/src/misc/sigma.misc.bindDOMEvents.js"
import "MindPalace-sigma.js/src/misc/sigma.misc.drawHovers.js"

let sigma = window.sigma

// By default we exclude WbGL renderer from the Sigma component.
// WebGL has to be imported explicitly via <SigmaEnableWebGL /> in the global context.
sigma.renderers.def = sigma.renderers.canvas

// We do not support svg at all to reduce package size
//    'src/renderers/sigma.renderers.svg.js',
//    'src/renderers/svg/sigma.svg.utils.js',
//    'src/renderers/svg/sigma.svg.nodes.def.js',
//    'src/renderers/svg/sigma.svg.edges.def.js',
//    'src/renderers/svg/sigma.svg.edges.curve.js',
//    'src/renderers/svg/sigma.svg.labels.def.js',
//    'src/renderers/svg/sigma.svg.hovers.def.js',

export default sigma