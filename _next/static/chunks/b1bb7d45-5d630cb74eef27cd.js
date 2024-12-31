"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{5337:function(t,e,s){s.d(e,{QV:function(){return N}});var n=s(9319),i=s(9840),o=s(8090),r=s(588),a=s(9897),h=s(6275),l=s(7629),u=s(2328),c=s(8374),p=s(2931),f=s(618),d=s(6040),g=s(1977),m=s(7385),y=s(6325),w=s(1111),b=s(8913),$=s(6347),T=s(6529);function O(t){return Array.isArray(t)}function z(t){return!function(t){return t instanceof n.esB}(t)&&!O(t)}function A(t,e,s,n=!0,i=""){if(null==e||0===e.length){if(null!=t){let e=!1;if(O(t)&&t.length>0)e=!0;else if(z(t)){for(const s in t)if(t.hasOwnProperty(s)){e=!0;break}}else e=!0;if(e)throw new r.nu(`Error when checking model ${i} expected no data, but got ${t}`)}return[]}if(null==t)return e.map((t=>null));let o;if(z(t)){t=t,o=[];for(const s of e){if(null==t[s])throw new r.nu(`No data provided for "${s}". Need data for each key in: ${e}`);o.push(t[s])}}else if(O(t)){if((t=t).length!==e.length)throw new r.nu(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${e.length} Tensor(s), but instead got the following list of Tensor(s): ${t}`);o=t}else{if(t=t,e.length>1)throw new r.nu(`The model ${i} expects ${e.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${t.shape}`);o=[t]}if(o=(0,$.YV)(o),null!=s)for(let a=0;a<e.length;++a){if(null==s[a])continue;const t=o[a];if(t.shape.length!==s[a].length)throw new r.nu(`Error when checking ${i}: expected ${e[a]} to have ${s[a].length} dimension(s). but got array with shape ${t.shape}`);for(let e=0;e<s[a].length;++e){if(0===e&&!n)continue;const o=t.shape[e],h=s[a][e];if(null!=h&&h>=0&&o!==h)throw new r.nu(`${i} expected a batch of elements where each example has shape [${s[a].slice(1,s[a].length)}] (i.e.,tensor shape [*,${s[a].slice(1,s[a].length)}]) but the ${i} received an input with ${t.shape[0]} examples, each with shape [${t.shape.slice(1,t.shape.length)}] (tensor shape [${t.shape}])`)}}return o}function v(t,e,s,n=!0,i=""){let o;if(Array.isArray(t)){if(t.length!==e.length)throw new r.nu(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${e.length} Tensor(s), but instead got ${t.length} Tensors(s).`);o=t}else{if(e.length>1)throw new r.nu(`The model expects ${e.length} ${i} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(t.shape)}.`);o=[t]}if(null!=s)for(let a=0;a<e.length;++a){if(null==s[a])continue;const t=o[a];if(t.shape.length!==s[a].length)throw new r.nu(`Error when checking ${i}: expected ${e[a]} to have ${s[a].length} dimension(s), but got array with shape ${JSON.stringify(t.shape)}`);for(let o=0;o<s[a].length;++o){if(0===o&&!n)continue;const h=t.shape[o],l=s[a][o];if(null!=l&&l!==h)throw new r.nu(`Error when checking ${i}: expected ${e[a]} to have shape ${JSON.stringify(s[a])} but got array with shape ${JSON.stringify(t.shape)}.`)}}}class N extends y.W{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new r.nu("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");(0,f.I)(this,t,e,s)}compile(t){if(null==t.loss&&(t.loss=[]),this.loss=t.loss,"string"===typeof t.optimizer)this.optimizer_=u.j(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof n.gaJ))throw new r.nu("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(Array.isArray(t.loss)||"string"===typeof t.loss||"function"===typeof t.loss)if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new r.nu(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);const s=t.loss;e=s.map((t=>h.U2(t)))}else{const s=h.U2(t.loss);this.outputs.forEach((t=>{e.push(s)}))}else{t.loss=t.loss;for(const e in t.loss)if(-1===this.outputNames.indexOf(e))throw new r.nu(`Unknown entry in loss dictionary: "${e}". Only expected the following keys: ${this.outputNames}`);for(const s of this.outputNames)null==t.loss[s]&&console.warn(`Output "${s}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${s} during training`),e.push(h.U2(t.loss[s]))}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let n=0;n<this.outputs.length;++n){const t=this.internalOutputShapes[n],e=this.outputNames[n];this.feedOutputNames.push(e),this.feedOutputShapes.push(t),this.feedLossFns.push(this.lossFunctions[n])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],(0,o.f4)("loss",(()=>{for(let t=0;t<this.outputs.length;++t){if(-1!==s.indexOf(t))continue;const e=this.lossFunctions[t];this.outputs.length>1&&(this.metricsTensors.push([e,t]),this.metricsNames.push(this.outputNames[t]+"_loss"))}}));const i=function(t,e){if(null==t||Array.isArray(t)&&0===t.length)return e.map((t=>[]));let s;if("string"===typeof t||"function"===typeof t)s=[t];else{if(!Array.isArray(t)&&"object"!==typeof t)throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${t}`);s=t}if(Array.isArray(s))return e.map((t=>s));{const t=[];for(const n of e){let e=s.hasOwnProperty(n)?s[n]:[];Array.isArray(e)||(e=[e]),t.push(e)}return t}}(t.metrics,this.outputNames),a=(t,e,s)=>{this.outputNames.length>1&&(e=this.outputNames[t]+"_"+e),this.metricsNames.push(e),this.metricsTensors.push([s,t])};(0,o.f4)("metric",(()=>{for(let t=0;t<this.outputs.length;++t){if(-1!==s.indexOf(t))continue;(e=>{let s,n,i;for(const r of e){if("string"===typeof r&&-1!==["accuracy","acc","crossentropy","ce"].indexOf(r)){const e=this.internalOutputShapes[t];let o;1===e[e.length-1]||this.lossFunctions[t]===h.fO?-1!==["accuracy","acc"].indexOf(r)?n=l._F:-1!==["crossentropy","ce"].indexOf(r)&&(n=l.fO):this.lossFunctions[t]===h.KM?-1!==["accuracy","acc"].indexOf(r)?n=l.TY:-1!==["crossentropy","ce"].indexOf(r)&&(n=l.KM):-1!==["accuracy","acc"].indexOf(r)?n=l.G5:-1!==["crossentropy","ce"].indexOf(r)&&(n=l.uq),-1!==["accuracy","acc"].indexOf(r)?o="acc":-1!==["crossentropy","ce"].indexOf(r)&&(o="ce"),i=n,s=""+o}else{const t=l.U2(r);i=t,s=""+l.aI(r)}let e;(0,o.f4)(s,(()=>{e=i})),a(t,s,e)}})(i[t])}})),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){null!=this.collectedTrainableWeights&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const n=null==s.batchSize?32:s.batchSize;(0,$.fQ)(n);const i=this.standardizeUserDataXY(t,e,!0,n);try{const o=i[0].concat(i[1]);this.makeTestFunction();const r=this.testFunction,a=this.testLoop(r,o,n,s.verbose,s.steps);return(0,p.Bq)(a)}finally{(0,$.kS)(i[0],t),(0,$.kS)(i[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),(0,b.D)(this,t,e)}checkNumSamples(t,e,s,n="steps"){let i;if(null!=s){if(i=null,null!=e)throw new r.nu(`If ${n} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else{if(null==t)throw new r.nu(`Either the input data should have a defined shape, or ${n} shoud be specified.`);i=Array.isArray(t)?t[0].shape[0]:t.shape[0]}return i}execute(t,e){if(Array.isArray(e)&&0===e.length)throw new r.nu("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),i=s?e:[e],o=this.retrieveSymbolicTensors(i),a=new w.l2;if(t instanceof n.esB&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new r.nu(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let e=0;e<this.inputs.length;++e)a.add(this.inputs[e],t[e])}else for(const n of this.inputs){const e=t[n.name];if(null==e)throw new r.nu(`No value is provided for the model's input ${n.name}`);a.add(n,e)}const h=(0,w.ht)(o,a);return s?h:h[0]}retrieveSymbolicTensors(t){const e=(0,p.JE)(null,t.length);let s=t.length;for(const n of this.layers){const i=Array.isArray(n.output)?n.output:[n.output],o=i.map((t=>t.name));for(let n=0;n<t.length;++n){const r=o.indexOf(t[n]);if(-1!==r&&(e[n]=i[r],s--),0===s)break}if(0===s)break}if(s>0){const s=[];throw e.forEach(((e,n)=>{null==e&&s.push(t[n])})),new r.nu(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(s)}`)}return e}predictLoop(t,e=32,s=!1){return n.lub((()=>{const i=this.checkNumSamples(t);if(s)throw new r.nj("Verbose predictLoop() is not implemented yet.");const o=(0,$.R_)(i,e),a=this.outputs.map((t=>[]));for(let e=0;e<o.length;++e){n.lub((()=>{const s=o[e][0],n=o[e][1],i=(0,$.sf)(t,s,n),r=[];if(Array.isArray(i))for(let t=0;t<i.length;++t)r.push({key:this.inputs[t],value:i[t]});else r.push({key:this.inputs[0],value:i});const a=new w.l2(r);return(0,w.ht)(this.outputs,a)})).forEach(((t,e)=>a[e].push(t)))}return(0,p.Bq)(a.map((t=>n.zoF(t,0))))}))}predict(t,e={}){const s=(0,$.YV)(t);v(s,this.inputNames,this.feedInputShapes,!1);try{const n=null==e.batchSize?32:e.batchSize;return(0,$.fQ)(n),this.predictLoop(s,n)}finally{(0,$.kS)(s,t)}}predictOnBatch(t){v(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,i){if(null==this.optimizer_)throw new r.LH("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const o=[];for(let n=0;n<this.feedOutputShapes.length;++n){const t=this.feedOutputShapes[n];this.feedLossFns[n]===h.KM?o.push(t.slice(0,t.length-1).concat([1])):o.push(t)}if(function(t,e,s){const i=(0,p.Tw)(t.map((t=>t.shape[0])));i.sort();const o=(0,p.Tw)(e.map((t=>t.shape[0])));if(o.sort(),i.length>1)throw new r.nu(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map((t=>t.shape)))}`);if(o.length>1)throw new r.nu(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map((t=>t.shape)))}`);if(i.length>0&&o.length>0&&!n.D5U.arraysEqual(i,o))throw new r.nu(`Input Tensors should have the same number of samples as target Tensors. Found ${i[0]} input sample(s) and ${o[0]} target sample(s).`)}(t=A(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=A(e,this.feedOutputNames,o,!1,"target")),function(t,e,s){const n=[h.FD,h.fO,h.uq];for(let i=0;i<t.length;++i){const o=t[i],a=e[i],l=s[i];if(null!=a){if(a===h.uq&&1===o.shape[o.shape.length-1])throw new r.nu(`You are passing a target array of shape ${o.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(-1!==n.indexOf(a)){const t=o.shape.slice(1),e=l.slice(1);for(let s=0;s<t.length;++s){const n=t[s],i=e[s];if(null!=i&&n!==i)throw new r.nu(`A target Tensor with shape ${o.shape} was passed for an output of shape ${l}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&null!=i&&i>0&&t[0].shape[0]%i!==0)throw new r.nu(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${i}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,n,i=!0,o){const[r,a]=this.standardizeUserDataXY(t,e,i,o);if(null!=s)throw new Error("sample weight is not supported yet.");let h=null;if(null!=n){const t=(0,T.Vf)(n,this.outputNames);h=[];for(let e=0;e<t.length;++e)h.push(await(0,T.tl)(a[e],null,t[e]))}return[r,a,h]}testLoop(t,e,s,o=0,a){return n.lub((()=>{const h=this.checkNumSamples(e,s,a,"steps"),l=[];if(o>0)throw new r.nj("Verbose mode is not implemented yet.");if(null!=a)throw new r.nj("steps mode in testLoop() is not implemented yet");{const o=(0,$.R_)(h,s),r=(0,n.RRF)((0,d.w6)(0,h));for(let s=0;s<o.length;++s){const a=o[s][0],h=o[s][1],u=i.c9(r,a,h-a),c=(0,$.YX)(e,u),p=t(c);if(0===s)for(let t=0;t<p.length;++t)l.push((0,n.iD$)(0));for(let t=0;t<p.length;++t){const e=p[t];l[t]=n.IHx(l[t],n.dC7(h-a,e))}}for(let t=0;t<l.length;++t)l[t]=n.hiC(l[t],h)}return l}))}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const n=t[s];let i=n;if((0,p.QX)(t,n)>1){i+=`_${(0,p.QX)(t.slice(0,s),n)}`}e.push(i)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),i=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+2*this.outputs.length),r=[],a=this.collectedTrainableWeights.map((t=>t.read()));return[this.optimizer_.minimize((()=>{const t=[];for(let e=0;e<this.inputs.length;++e)t.push({key:this.inputs[e],value:s[e]});const a=new w.l2(t),h=(0,w.ht)(this.outputs,a,{training:!0});let l;for(let s=0;s<this.lossFunctions.length;++s){let t=(0,this.lossFunctions[s])(i[s],h[s]);null!=o[s]&&(t=(0,T.mo)(t,o[s]));const r=n.J69(t);e.push(r),l=0===s?t:n.IHx(l,t)}for(let s=0;s<this.metricsTensors.length;++s){let t;if(this.outputs.length>1&&s<this.outputs.length)t=e[s];else{const e=this.metricsTensors[s][0],o=this.metricsTensors[s][1];t=n.J69(e(i[o],h[o]))}n.CnY(t),r.push(t)}return l=n.J69(l),this.calculateLosses().forEach((t=>{l=n.IHx(l,t)})),l}),!0,a)].concat(r)}}makeTestFunction(){this.testFunction=t=>n.lub((()=>{const e=[];let s;const i=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),r=[];for(let t=0;t<this.inputs.length;++t)r.push({key:this.inputs[t],value:i[t]});const a=new w.l2(r),h=(0,w.ht)(this.outputs,a);for(let t=0;t<this.lossFunctions.length;++t){const i=this.lossFunctions[t],r=n.J69(i(o[t],h[t]));s=0===t?r:n.IHx(s,r),e.push(s)}for(let t=0;t<this.metricsTensors.length;++t){const s=this.metricsTensors[t][0],i=this.metricsTensors[t][1],r=n.J69(s(o[i],h[i]));e.push(r)}return e}))}async fit(t,e,s={}){return(0,$.uU)(this,t,e,s)}async fitDataset(t,e){return(0,b.y)(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),i=s[0],o=s[1],r=this.makeTrainFunction()(i.concat(o)),a=[];for(const n of r){const t=await n.data();a.push(t[0])}return n.B90(r),(0,$.kS)(s[0],t),(0,$.kS)(s[1],e),(0,p.Bq)(a)}getNamedWeights(t){const e=[],s=null!=t&&t.trainableOnly,n=s?this.trainableWeights:this.weights,i=this.getWeights(s);for(let o=0;o<n.length;++o)s&&!n[o].trainable||e.push({name:n[o].originalName,tensor:i[o]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(0===t.refCountAfterDispose&&null!=this.optimizer&&this.isOptimizerOwned){const e=n.sq6().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-n.sq6().numTensors}return t}getLossIdentifiers(){let t;if("string"===typeof this.loss)t=(0,p.D1)(this.loss);else if(Array.isArray(this.loss)){for(const t of this.loss)if("string"!==typeof t)throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map((t=>(0,p.D1)(t)))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const n of e){if("string"!==typeof s[n])throw new Error("Serialization of non-string loss is not supported.");t[n]=(0,p.D1)(s[n])}}return t}getMetricIdentifiers(){if("string"===typeof this.metrics||"function"===typeof this.metrics)return[(0,p.D1)(l.aI(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map((t=>(0,p.D1)(l.aI(t))));{const t={};for(const e in this.metrics)t[e]=(0,p.D1)(l.aI(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(null!=t.weighted_metrics)throw new Error("Loading weight_metrics is not supported yet.");if(null!=t.loss_weights)throw new Error("Loading loss_weights is not supported yet.");if(null!=t.sample_weight_mode)throw new Error("Loading sample_weight_mode is not supported yet.");const e=(0,g.a)(t.optimizer_config),s=(0,a.v)(e);let n,i;if("string"===typeof t.loss)n=(0,p.zW)(t.loss);else if(Array.isArray(t.loss))n=t.loss.map((t=>(0,p.zW)(t)));else if(null!=t.loss){n={};for(const e in t.loss)n[e]=(0,p.zW)(t.loss[e])}if(Array.isArray(t.metrics))i=t.metrics.map((t=>(0,p.zW)(t)));else if(null!=t.metrics){i={};for(const e in t.metrics)i[e]=(0,p.zW)(t.metrics[e])}this.compile({loss:n,metrics:i,optimizer:s})}async save(t,e){if("string"===typeof t){const e=n.io.getSaveHandlers(t);if(0===e.length)throw new r.nu(`Cannot find any save handlers for URL '${t}'`);if(e.length>1)throw new r.nu(`Found more than one (${e.length}) save handlers for URL '${t}'`);t=e[0]}if(null==t.save)throw new r.nu("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await n.io.encodeWeights(this.getNamedWeights(e)),i={modelTopology:this.toJSON(null,!1),format:"layers-model",generatedBy:`TensorFlow.js tfjs-layers v${m.i}`,convertedBy:null};if(null!=e&&e.includeOptimizer&&null!=this.optimizer){i.trainingConfig=this.getTrainingConfig();const t="optimizer",{data:e,specs:o}=await n.io.encodeWeights(await this.optimizer.getWeights(),t);s.specs.push(...o),s.data=n.io.concatenateArrayBuffers([s.data,e])}if(null!=this.userDefinedMetadata){const t=!0;(0,c.WE)(this.userDefinedMetadata,this.name,t),i.userDefinedMetadata=this.userDefinedMetadata}return i.weightData=s.data,i.weightSpecs=s.specs,t.save(i)}setUserDefinedMetadata(t){(0,c.WE)(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}N.className="Model",n.m7h.registerClass(N);class x extends N{}x.className="Functional",n.m7h.registerClass(x)}}]);