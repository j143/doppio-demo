define(["require","exports","../java_object","../logging","../ClassData","../gLong","../util","../methods","../enums","../assert"],function(a,b,c,d,e,f,g,h){function i(a,b,c){if(null==b)a.throwNewException("Ljava/lang/NullPointerException;","");else{var d=b.array;if(!(0>c||c>=d.length))return d[c];a.throwNewException("Ljava/lang/ArrayIndexOutOfBoundsException;","Tried to access an illegal index in an array.")}}function j(a,b){return null==b?(a.throwNewException("Ljava/lang/NullPointerException;",""),!1):!0}function k(a,b){return b instanceof c.JavaArray?!0:(a.throwNewException("Ljava/lang/IllegalArgumentException;","Object is not an array."),!1)}function l(a,b,c){var d,e=b.get_field(a,"Ljava/lang/invoke/MemberName;flags"),f=b.get_field(a,"Ljava/lang/invoke/MemberName;type"),g=b.get_field(a,"Ljava/lang/invoke/MemberName;name");0===e&&(c instanceof h.Method?(e=65536,c.cls.accessFlags.isInterface()?d=9:c.accessFlags.isStatic()?d=6:"<"===c.name[0]?(e=131072,d=7):d=5):(e=262144,d=c.accessFlags.isStatic()?2:1),e|=d<<24),e|=c.accessFlags.getRawByte(),null===f&&(f=a.getThreadPool().getJVM().internString(c instanceof h.Method?c.raw_descriptor:c.type)),null===g&&(g=a.getThreadPool().getJVM().internString(c.name)),b.set_field(a,"Ljava/lang/invoke/MemberName;clazz",c.cls.getClassObject(a)),b.set_field(a,"Ljava/lang/invoke/MemberName;flags",e),b.set_field(a,"Ljava/lang/invoke/MemberName;type",f),b.set_field(a,"Ljava/lang/invoke/MemberName;name",g),b.vmtarget=c}var m,n=(d.debug,function(){function a(){}return a["forName0(Ljava/lang/String;ZLjava/lang/ClassLoader;)Ljava/lang/Class;"]=function(a,b,d,e){var f=g.int_classname(b.jvm2js_str());if(g.verify_int_classname(f)){var h=c.get_cl_from_jclo(a,e);a.setStatus(7),d?h.initializeClass(a,f,function(b){null!=b&&a.asyncReturn(b.getClassObject(a))}):h.resolveClass(a,f,function(b){null!=b&&a.asyncReturn(b.getClassObject(a))})}else a.throwNewException("Ljava/lang/ClassNotFoundException;",f)},a["isInstance(Ljava/lang/Object;)Z"]=function(a,b,c){return null!==c?c.cls.isCastable(b.$cls):!1},a["isAssignableFrom(Ljava/lang/Class;)Z"]=function(a,b,c){return c.$cls.isCastable(b.$cls)},a["isInterface()Z"]=function(a,b){return b.$cls instanceof e.ReferenceClassData?b.$cls.accessFlags.isInterface():!1},a["isArray()Z"]=function(a,b){return b.$cls instanceof e.ArrayClassData},a["isPrimitive()Z"]=function(a,b){return b.$cls instanceof e.PrimitiveClassData},a["getName0()Ljava/lang/String;"]=function(a,b){return c.initString(a.getBsCl(),b.$cls.getExternalName())},a["getSuperclass()Ljava/lang/Class;"]=function(a,b){if(b.$cls instanceof e.PrimitiveClassData)return null;var c=b.$cls;return c.accessFlags.isInterface()||null==c.getSuperClass()?null:c.getSuperClass().getClassObject(a)},a["getInterfaces0()[Ljava/lang/Class;"]=function(a,b){var d=b.$cls,e=d.getInterfaces(),f=e.map(function(b){return b.getClassObject(a)});return new c.JavaArray(a.getBsCl().getInitializedClass(a,"[Ljava/lang/Class;"),f)},a["getComponentType()Ljava/lang/Class;"]=function(a,b){return b.$cls instanceof e.ArrayClassData?b.$cls.getComponentClass().getClassObject(a):null},a["getModifiers()I"]=function(a,b){return b.$cls.accessFlags.getRawByte()},a["getSigners()[Ljava/lang/Object;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["setSigners([Ljava/lang/Object;)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["getEnclosingMethod0()[Ljava/lang/Object;"]=function(a,b){var d,f,g=a.getBsCl();if(!(b.$cls instanceof e.ReferenceClassData))return null;var h=b.$cls,i=h.getAttribute("EnclosingMethod");if(null==i)return null;var j=i.encClass.tryGetClass(h.getLoader()).getClassObject(a);return null!=i.encMethod?(f=c.initString(g,i.encMethod.name),d=c.initString(g,i.encMethod.descriptor)):(f=null,d=null),new c.JavaArray(g.getInitializedClass(a,"[Ljava/lang/Object;"),[j,f,d])},a["getDeclaringClass0()Ljava/lang/Class;"]=function(a,b){var c,d,f,g,h;if(!(b.$cls instanceof e.ReferenceClassData))return null;var i=b.$cls,j=i.getAttribute("InnerClasses");if(null==j)return null;var k=i.getInternalName(),l=j.classes;for(g=0,h=l.length;h>g;g++)if(d=l[g],d.outerInfoIndex>0&&(f=i.constantPool.get(d.innerInfoIndex).name,f===k))return c=i.constantPool.get(d.outerInfoIndex),c.tryGetClass(i.getLoader()).getClassObject(a);return null},a["getProtectionDomain0()Ljava/security/ProtectionDomain;"]=function(){return null},a["getPrimitiveClass(Ljava/lang/String;)Ljava/lang/Class;"]=function(a,b){var c=g.typestr2descriptor(b.jvm2js_str()),d=a.getBsCl().getInitializedClass(a,c);return d.getClassObject(a)},a["getGenericSignature0()Ljava/lang/String;"]=function(a,b){var d=b.$cls.getAttribute("Signature");return null!=d&&null!=d.sig?c.initString(a.getBsCl(),d.sig):null},a["getRawAnnotations()[B"]=function(a,b){var d=b.$cls,e=d.getAttribute("RuntimeVisibleAnnotations");return null!==e?new c.JavaArray(a.getBsCl().getInitializedClass(a,"[B"),e.rawBytes):null},a["getConstantPool()Lsun/reflect/ConstantPool;"]=function(a,b){var d=b.$cls;return new c.JavaObject(a.getBsCl().getInitializedClass(a,"Lsun/reflect/ConstantPool;"),{"Lsun/reflect/ConstantPool;constantPoolOop":d.constantPool})},a["getDeclaredFields0(Z)[Ljava/lang/reflect/Field;"]=function(a,b,d){var e=b.$cls.getFields();d&&(e=e.filter(function(a){return a.accessFlags.isPublic()}));var f=[];a.setStatus(7),g.asyncForEach(e,function(b,c){b.reflector(a,function(a){null!=a&&(f.push(a),c())})},function(){var b=a.getBsCl().getInitializedClass(a,"[Ljava/lang/reflect/Field;");a.asyncReturn(new c.JavaArray(b,f))})},a["getDeclaredMethods0(Z)[Ljava/lang/reflect/Method;"]=function(a,b,d){var e=b.$cls.getMethods().filter(function(a){return"<"!==a.name[0]&&(a.accessFlags.isPublic()||!d)}),f=[];a.setStatus(7),g.asyncForEach(e,function(b,c){b.reflector(a,!1,function(a){null!==a&&(f.push(a),c())})},function(){var b=a.getBsCl().getInitializedClass(a,"[Ljava/lang/reflect/Method;");a.asyncReturn(new c.JavaArray(b,f))})},a["getDeclaredConstructors0(Z)[Ljava/lang/reflect/Constructor;"]=function(a,b,d){var e=b.$cls.getMethods().filter(function(a){return"<init>"===a.name&&(!d||a.accessFlags.isPublic())}),f=a.getBsCl().getInitializedClass(a,"[Ljava/lang/reflect/Constructor;"),h=[];a.setStatus(7),g.asyncForEach(e,function(b,c){b.reflector(a,!0,function(a){null!==a&&(h.push(a),c())})},function(){a.asyncReturn(new c.JavaArray(f,h))})},a["getDeclaredClasses0()[Ljava/lang/Class;"]=function(a,b){var d=new c.JavaArray(a.getBsCl().getInitializedClass(a,"[Ljava/lang/Class;"),[]),f=b.$cls;if(!(f instanceof e.ReferenceClassData))return d;var h=f.getInternalName(),i=f.getAttributes("InnerClasses");if(0===i.length)return d;for(var j=[],k=0;k<i.length;k++){var l=i[k].classes.filter(function(a){return a.outerInfoIndex>0&&f.constantPool.get(a.outerInfoIndex).name===h}).map(function(a){return f.constantPool.get(a.innerInfoIndex)});j.push.apply(j,l)}a.setStatus(7),g.asyncForEach(j,function(b,c){b.getClass(a,f.getLoader(),function(b){null!=b&&(d.array.push(b.getClassObject(a)),c())})},function(){return a.asyncReturn(d)})},a["desiredAssertionStatus0(Ljava/lang/Class;)Z"]=function(a){return a.getThreadPool().getJVM().areAssertionsEnabled()},a}()),o=function(){function a(){}return a["load(Ljava/lang/String;Z)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["find(Ljava/lang/String;)J"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["unload(Ljava/lang/String;)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}(),p=function(){function a(){}return a["defineClass0(Ljava/lang/String;[BIILjava/security/ProtectionDomain;)Ljava/lang/Class;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["defineClass1(Ljava/lang/String;[BIILjava/security/ProtectionDomain;Ljava/lang/String;)Ljava/lang/Class;"]=function(a,b,d,e,f,h){var i=c.get_cl_from_jclo(a,b),j=g.int_classname(d.jvm2js_str()),k=i.defineClass(a,j,g.byteArray2Buffer(e.array,f,h));return null==k?null:(a.setStatus(7),void k.resolve(a,function(){a.asyncReturn(k.getClassObject(a))},!0))},a["defineClass2(Ljava/lang/String;Ljava/nio/ByteBuffer;IILjava/security/ProtectionDomain;Ljava/lang/String;)Ljava/lang/Class;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["resolveClass0(Ljava/lang/Class;)V"]=function(a,b,d){c.get_cl_from_jclo(a,b);d.$cls.isResolved()||(a.setStatus(7),d.$cls.resolve(a,function(b){null!==b&&a.asyncReturn()},!0))},a["findBootstrapClass(Ljava/lang/String;)Ljava/lang/Class;"]=function(a,b,c){var d=g.int_classname(c.jvm2js_str());a.setStatus(7),a.getBsCl().resolveClass(a,d,function(b){null!=b&&a.asyncReturn(b.getClassObject(a))},!0)},a["findLoadedClass0(Ljava/lang/String;)Ljava/lang/Class;"]=function(a,b,d){var e=c.get_cl_from_jclo(a,b),f=g.int_classname(d.jvm2js_str()),h=e.getResolvedClass(f);return null!=h?h.getClassObject(a):null},a["retrieveDirectives()Ljava/lang/AssertionStatusDirectives;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a}(),q=function(){function a(){}return a["initialize()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["registerNatives()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["compileClass(Ljava/lang/Class;)Z"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["compileClasses(Ljava/lang/String;)Z"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["command(Ljava/lang/Object;)Ljava/lang/Object;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["enable()V"]=function(){},a["disable()V"]=function(){},a}(),r=new Buffer(8),s=function(){function a(){}return a["doubleToRawLongBits(D)J"]=function(a,b){return r.writeDoubleLE(b,0),f.fromBits(r.readUInt32LE(0),r.readUInt32LE(4))},a["longBitsToDouble(J)D"]=function(a,b){return r.writeInt32LE(b.getLowBits(),0),r.writeInt32LE(b.getHighBits(),4),r.readDoubleLE(0)},a}(),t=function(){function a(){}return a["floatToRawIntBits(F)I"]=function(a,b){return r.writeFloatLE(b,0),r.readInt32LE(0)},a["intBitsToFloat(I)F"]=function(a,b){return r.writeInt32LE(b,0),r.readFloatLE(0)},a}(),u=function(){function a(){}return a["getClass()Ljava/lang/Class;"]=function(a,b){return b.cls.getClassObject(a)},a["hashCode()I"]=function(a,b){return b.ref},a["clone()Ljava/lang/Object;"]=function(a,b){return b.clone()},a["notify()V"]=function(a,b){b.getMonitor().notify(a)},a["notifyAll()V"]=function(a,b){b.getMonitor().notifyAll(a)},a["wait(J)V"]=function(a,b,c){b.getMonitor().wait(a,function(){a.asyncReturn()},c.toNumber())},a}(),v=function(){function a(){}return a["getSystemPackage0(Ljava/lang/String;)Ljava/lang/String;"]=function(a,b){var c=b.jvm2js_str();return a.getBsCl().getPackageNames().indexOf(c)>=0?b:null},a["getSystemPackages0()[Ljava/lang/String;"]=function(a){return new c.JavaArray(a.getBsCl().getInitializedClass(a,"[Ljava/lang/String;"),function(){var b,d=a.getBsCl().getPackageNames(),e=[];for(b=0;b<d.length;b++)e.push(c.initString(a.getBsCl(),d[b]));return e}())},a}(),w=function(){function a(){}return a["environ()[[B"]=function(a){var b,d,e=[],f=process.env;for(b in f)d=f[b],e.push(new c.JavaArray(a.getBsCl().getInitializedClass(a,"[B"),g.bytestr2Array(b))),e.push(new c.JavaArray(a.getBsCl().getInitializedClass(a,"[B"),g.bytestr2Array(d)));return new c.JavaArray(a.getBsCl().getInitializedClass(a,"[[B"),e)},a}(),x=function(){function a(){}return a["getLength(Ljava/lang/Object;)I"]=function(a,b){return k(a,b)&&j(a,b)?b.array.length:void 0},a["get(Ljava/lang/Object;I)Ljava/lang/Object;"]=function(a,b,c){var d=i(a,b,c);return null!=d&&null==d.ref?b.cls.getComponentClass().createWrapperObject(a,d):d},a["set(Ljava/lang/Object;ILjava/lang/Object;)V"]=function(a,b,c,d){if(k(a,b)&&j(a,b))if(0>c||c>=b.array.length)a.throwNewException("Ljava/lang/ArrayIndexOutOfBoundsException;","Tried to write to an illegal index in an array.");else{var f=b.cls.getComponentClass();if(f instanceof e.PrimitiveClassData)if(d.cls.isSubclass(a.getBsCl().getInitializedClass(a,f.boxClassName()))){var h=f.getInternalName(),i=d.cls.methodLookup(a,""+g.internal2external[h]+"Value()"+h);a.runMethod(i,[d],function(d,e){d?a.throwException(d):(b.array[c]=e,a.asyncReturn())})}else a.throwNewException("Ljava/lang/IllegalArgumentException;","argument type mismatch");else d.cls.isSubclass(f)?b.array[c]=d:a.throwNewException("Ljava/lang/IllegalArgumentException;","argument type mismatch")}},a["setBoolean(Ljava/lang/Object;IZ)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["setByte(Ljava/lang/Object;IB)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["setChar(Ljava/lang/Object;IC)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["setShort(Ljava/lang/Object;IS)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["setInt(Ljava/lang/Object;II)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["setLong(Ljava/lang/Object;IJ)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["setFloat(Ljava/lang/Object;IF)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["setDouble(Ljava/lang/Object;ID)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["newArray(Ljava/lang/Class;I)Ljava/lang/Object;"]=function(a,b,d){var e=b.$cls.getLoader().getResolvedClass("["+b.$cls.getInternalName());return c.heapNewArray(a,e,d)},a["multiNewArray(Ljava/lang/Class;[I)Ljava/lang/Object;"]=function(a,b,d){var e=d.array;if(b.$cls.isInitialized(a)){var f=new Array(e.length+1).join("[")+b.$cls.getInternalName();return c.heapMultiNewArray(a,b.$cls.getLoader(),f,e)}a.setStatus(7),b.$cls.initialize(a,function(d){var f=new Array(e.length+1).join("[")+d.getInternalName();a.asyncReturn(c.heapMultiNewArray(a,b.$cls.getLoader(),f,e))})},a["getBoolean(Ljava/lang/Object;I)Z"]=i,a["getByte(Ljava/lang/Object;I)B"]=i,a["getChar(Ljava/lang/Object;I)C"]=i,a["getShort(Ljava/lang/Object;I)S"]=i,a["getInt(Ljava/lang/Object;I)I"]=i,a["getLong(Ljava/lang/Object;I)J"]=i,a["getFloat(Ljava/lang/Object;I)F"]=i,a["getDouble(Ljava/lang/Object;I)D"]=i,a}(),y=function(){function a(){}return a["defineClass0(Ljava/lang/ClassLoader;Ljava/lang/String;[BII)Ljava/lang/Class;"]=function(a,b,d,e,f,h){var i=c.get_cl_from_jclo(a,b),j=i.defineClass(a,g.int_classname(d.jvm2js_str()),g.byteArray2Buffer(e.array,f,h));return null!=j?j.getClassObject(a):void 0},a}(),z=function(){function a(){}return a["availableProcessors()I"]=function(){return 1},a["freeMemory()J"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["totalMemory()J"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["maxMemory()J"]=function(){return f.MAX_VALUE},a["gc()V"]=function(a){a.setStatus(7),setImmediate(function(){a.asyncReturn()})},a["runFinalization0()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["traceInstructions(Z)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["traceMethodCalls(Z)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}(),A=function(){function a(){}return a["getClassContext()[Ljava/lang/Class;"]=function(a){var b,d=[],e=a.getStackTrace();for(b=e.length-1;b>=0;b--){var f=e[b];d.push(f.method.cls.getClassObject(a))}return new c.JavaArray(a.getBsCl().getInitializedClass(a,"[Ljava/lang/Class;"),d)},a["currentClassLoader0()Ljava/lang/ClassLoader;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["classDepth(Ljava/lang/String;)I"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["classLoaderDepth0()I"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["currentLoadedClass0()Ljava/lang/Class;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a}(),B=function(){function a(){}return a["halt0(I)V"]=function(a){a.getThreadPool().getJVM().abort()},a["runAllFinalizers()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}(),C=function(){function a(){}return a["sin(D)D"]=function(a,b){return Math.sin(b)},a["cos(D)D"]=function(a,b){return Math.cos(b)},a["tan(D)D"]=function(a,b){return Math.tan(b)},a["asin(D)D"]=function(a,b){return Math.asin(b)},a["acos(D)D"]=function(a,b){return Math.acos(b)},a["atan(D)D"]=function(a,b){return Math.atan(b)},a["exp(D)D"]=function(a,b){return Math.exp(b)},a["log(D)D"]=function(a,b){return Math.log(b)},a["log10(D)D"]=function(a,b){return Math.log(b)/Math.LN10},a["sqrt(D)D"]=function(a,b){return Math.sqrt(b)},a["cbrt(D)D"]=function(a,b){var c=0>b;return c?-Math.pow(-b,1/3):Math.pow(b,1/3)},a["IEEEremainder(DD)D"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["atan2(DD)D"]=function(a,b,c){return Math.atan2(b,c)},a["pow(DD)D"]=function(a,b,c){return Math.pow(b,c)},a["sinh(D)D"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["cosh(D)D"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["tanh(D)D"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["hypot(DD)D"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["expm1(D)D"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["log1p(D)D"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a}(),D=function(){function a(){}return a["intern()Ljava/lang/String;"]=function(a,b){return a.getThreadPool().getJVM().internString(b.jvm2js_str(),b)},a}(),E=function(){function a(){}return a["setIn0(Ljava/io/InputStream;)V"]=function(a,b){var c=a.getBsCl().getInitializedClass(a,"Ljava/lang/System;");c.staticPut(a,"in",b)},a["setOut0(Ljava/io/PrintStream;)V"]=function(a,b){var c=a.getBsCl().getInitializedClass(a,"Ljava/lang/System;");c.staticPut(a,"out",b)},a["setErr0(Ljava/io/PrintStream;)V"]=function(a,b){var c=a.getBsCl().getInitializedClass(a,"Ljava/lang/System;");c.staticPut(a,"err",b)},a["currentTimeMillis()J"]=function(){return f.fromNumber((new Date).getTime())},a["nanoTime()J"]=function(){return f.fromNumber((new Date).getTime()).multiply(f.fromNumber(1e6))},a["arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V"]=function(a,b,d,f,g,h){var i,j;null==b||null==f?a.throwNewException("Ljava/lang/NullPointerException;","Cannot copy to/from a null array."):b.cls instanceof e.ArrayClassData&&f.cls instanceof e.ArrayClassData?0>d||d+h>b.array.length||0>g||g+h>f.array.length||0>h?a.throwNewException("Ljava/lang/ArrayIndexOutOfBoundsException;","Tried to write to an illegal index in an array."):(b===f&&(b={cls:b.cls,array:b.array.slice(d,d+h)},d=0),b.cls.isCastable(f.cls)?c.arraycopy_no_check(b,d,f,g,h):(j=b.cls.getComponentClass(),i=f.cls.getComponentClass(),j instanceof e.PrimitiveClassData||i instanceof e.PrimitiveClassData?a.throwNewException("Ljava/lang/ArrayStoreException;","If calling arraycopy with a primitive array, both src and dest must be of the same primitive type."):c.arraycopy_check(a,b,d,f,g,h))):a.throwNewException("Ljava/lang/ArrayStoreException;","src and dest arguments must be of array type.")},a["identityHashCode(Ljava/lang/Object;)I"]=function(a,b){return null!=b&&null!=b.ref?b.ref:0},a["initProperties(Ljava/util/Properties;)Ljava/util/Properties;"]=function(a,b){var c=b.cls.methodLookup(a,"setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object;"),d=a.getThreadPool().getJVM(),e=d.getSystemPropertyNames();a.setStatus(7),g.asyncForEach(e,function(e,f){var g=d.getSystemProperty(e);a.runMethod(c,[b,d.internString(e),d.internString(g)],function(a){f(a)})},function(c){c?a.throwException(c):a.asyncReturn(b)})},a["mapLibraryName(Ljava/lang/String;)Ljava/lang/String;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a}(),F=function(){function a(){}return a["currentThread()Ljava/lang/Thread;"]=function(a){return a},a["yield()V"]=function(a){a.setStatus(7),setImmediate(function(){a.setStatus(2),a.asyncReturn()})},a["sleep(J)V"]=function(a,b){var c=a.currentMethod();a.setStatus(7),setTimeout(function(){c===a.currentMethod()&&(a.setStatus(2),a.asyncReturn())},b.toNumber())},a["start0()V"]=function(a,b){var c=b.cls.methodLookup(a,"run()V");null!=c&&b.runMethod(c,[b])},a["isInterrupted(Z)Z"]=function(a,b,c){var d=b.isInterrupted();return c&&b.setInterrupted(!1),d},a["isAlive()Z"]=function(a,b){var c=b.getStatus();return 9!==c&&0!==c},a["countStackFrames()I"]=function(a){return a.getStackTrace().length},a["holdsLock(Ljava/lang/Object;)Z"]=function(a,b){var c=b.getMonitor();return c.getOwner()===a},a["dumpThreads([Ljava/lang/Thread;)[[Ljava/lang/StackTraceElement;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["getThreads()[Ljava/lang/Thread;"]=function(a){return new c.JavaArray(a.getBsCl().getInitializedClass(a,"[Ljava/lang/Thread;"),a.getThreadPool().getThreads())},a["setPriority0(I)V"]=function(){},a["stop0(Ljava/lang/Object;)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["suspend0()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["resume0()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["interrupt0()V"]=function(a,b){function c(){b.throwNewException("Ljava/lang/InterruptedException;","interrupt0 called")}var d=b.cls.methodLookup(a,"checkAccess()V");null!=d&&a.runMethod(d,[b],function(d){if(d)a.throwException(d);else{var e=b.getStatus();switch(e){case 0:case 9:return a.asyncReturn();case 3:case 5:case 6:b.setInterrupted(!1);var f=b.getMonitorBlock();return 3===e?(f.unblock(b,!0),c()):f.unwait(b,!1,!0,c),a.asyncReturn();case 8:b.getThreadPool().completelyUnpark(b);default:var g=a.getBsCl().getInitializedClass(a,"Ljava/lang/Thread;"),h=[g.methodLookup(a,"join()V"),g.methodLookup(a,"join(J)V"),g.methodLookup(a,"join(JI)V"),g.methodLookup(a,"sleep(J)V"),g.methodLookup(a,"sleep(JI)V")],i=b.getStackTrace(),j=i[i.length-1].method;return-1!==h.indexOf(j)?(b.setInterrupted(!1),b.throwNewException("Ljava/lang/InterruptedException;","interrupt0 called")):b.setInterrupted(!0),a.asyncReturn()}}})},a}(),G=function(){function a(){}return a["fillInStackTrace(I)Ljava/lang/Throwable;"]=function(a,b){var d,e,f=[],h=a.getStackTrace(),i=a.getBsCl(),j=i.getInitializedClass(a,"Ljava/lang/StackTraceElement;");for(h.pop();h.length>0&&!h[h.length-1].method.accessFlags.isNative()&&h[h.length-1].locals[0]===b;)h.pop();for(d=0;d<h.length;d++){var k,l=h[d],m=l.method.cls,n=-1;if(!l.method.isHidden()){if(l.method.accessFlags.isNative())k="Native Method";else{var o=m.getAttribute("SourceFile"),p=l.method.getCodeAttribute(),q=p.getAttribute("LineNumberTable");k=null!=o?o.filename:"unknown",n=null!=q?q.getLineNumber(l.pc):-1}f.push(new c.JavaObject(j,{"Ljava/lang/StackTraceElement;declaringClass":c.initString(i,g.ext_classname(m.getInternalName())),"Ljava/lang/StackTraceElement;methodName":c.initString(i,null!=l.method.name?l.method.name:"unknown"),"Ljava/lang/StackTraceElement;fileName":c.initString(i,k),"Ljava/lang/StackTraceElement;lineNumber":n}))}}return e=new c.JavaArray(a.getBsCl().getInitializedClass(a,"[Ljava/lang/StackTraceElement;"),f.reverse()),b.set_field(a,"Ljava/lang/Throwable;backtrace",e),b},a["getStackTraceDepth()I"]=function(a,b){return b.get_field(a,"Ljava/lang/Throwable;backtrace").array.length},a["getStackTraceElement(I)Ljava/lang/StackTraceElement;"]=function(a,b,c){return b.get_field(a,"Ljava/lang/Throwable;backtrace").array[c]},a}(),H=function(){function a(){}return a["waitForProcessExit(I)I"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["forkAndExec(I[B[B[BI[BI[B[IZ)I"]=function(a){a.throwNewException("Ljava/lang/Error;","Doppio doesn't support forking processes.")},a["destroyProcess(IZ)V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["init()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}();!function(a){a[a.IS_METHOD=65536]="IS_METHOD",a[a.IS_CONSTRUCTOR=131072]="IS_CONSTRUCTOR",a[a.IS_FIELD=262144]="IS_FIELD",a[a.IS_TYPE=524288]="IS_TYPE",a[a.CALLER_SENSITIVE=1048576]="CALLER_SENSITIVE",a[a.SEARCH_SUPERCLASSES=1048576]="SEARCH_SUPERCLASSES",a[a.SEARCH_INTERFACES=2097152]="SEARCH_INTERFACES",a[a.REFERENCE_KIND_SHIFT=24]="REFERENCE_KIND_SHIFT",a[a.ALL_KINDS=a.IS_METHOD|a.IS_CONSTRUCTOR|a.IS_FIELD|a.IS_TYPE]="ALL_KINDS"}(m||(m={}));var I=function(){function a(){}return a["init(Ljava/lang/invoke/MemberName;Ljava/lang/Object;)V"]=function(a,b,c){var d,e,f=c.get_field(a,c.cls.getInternalName()+"clazz"),h=c.get_field(a,c.cls.getInternalName()+"modifiers"),i=new g.Flags(h);switch(b.set_field(a,"Ljava/lang/invoke/MemberName;clazz",f),c.cls.getInternalName()){case"Ljava/lang/reflect/Method;":h|=65536,d=i.isStatic()?6:f.$cls.accessFlags.isInterface()?9:5,e=f.$cls.getMethodFromSlot(c.get_field(a,"Ljava/lang/reflect/Method;slot"));break;case"Ljava/lang/reflect/Constructor;":h|=131072,d=7,e=f.$cls.getMethodFromSlot(c.get_field(a,"Ljava/lang/reflect/Constructor;slot"));break;case"Ljava/lang/reflect/Field;":h|=262144,d=i.isStatic()?2:1,e=f.$cls.getFieldFromSlot(c.get_field(a,"Ljava/lang/reflect/Field;slot"));break;default:a.throwNewException("Ljava/lang/InternalError;","init: Invalid target.")}h|=d<<24,b.set_field(a,"Ljava/lang/invoke/MemberName;flags",h),b.vmtarget=e},a["getConstant(I)I"]=function(){return 0},a["resolve(Ljava/lang/invoke/MemberName;Ljava/lang/Class;)Ljava/lang/invoke/MemberName;"]=function(a,b){var c,d=b.get_field(a,"Ljava/lang/invoke/MemberName;type"),e=b.get_field(a,"Ljava/lang/invoke/MemberName;name").jvm2js_str(),f=b.get_field(a,"Ljava/lang/invoke/MemberName;clazz").$cls,g=b.get_field(a,"Ljava/lang/invoke/MemberName;flags");if(null==f||null==e||null==d)return void a.throwNewException("Ljava/lang/IllegalArgumentException;","Invalid MemberName.");switch(g&m.ALL_KINDS){case 131072:case 65536:a.setStatus(7),a.runMethod(d.cls.methodLookup(a,"toMethodDescriptorString()Ljava/lang/String;"),[d],function(d,g){d?a.throwException(d):(c=f.methodLookup(a,e+g.jvm2js_str()),null!==c&&(l(a,b,c),a.asyncReturn(b)))});break;case 262144:if(c=f.fieldLookup(a,e),null!==c)return l(a,b,c),b;break;default:a.throwNewException("Ljava/lang/LinkageError;","resolve member name")}},a["objectFieldOffset(Ljava/lang/invoke/MemberName;)J"]=function(a,b){return void 0!==b.vmtarget?f.fromNumber(b.vmtarget.slot):void a.throwNewException("Ljava/lang/IllegalStateException;","Attempted to retrieve the offset for an unresolved MemberName.")},a["getMembers(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;ILjava/lang/Class;I[Ljava/lang/invoke/MemberName;)I"]=function(a,b,c,d,e,f,g,h){function i(b){g>=0?(m<o.length&&l(a,o[m],b),m++):g--}var j,k,m=0,n=b.$cls,o=h.array,p=null!==c?c.jvm2js_str():null,q=null!==d?d.jvm2js_str():null;return 0===(131072&e)||null!==p&&"<init>"!==p||(j=n.getMethods(),j.forEach(function(a){"<init>"!==a.name||null!==q&&q!==a.raw_descriptor||i(a)})),0!==(65536&e)&&(j=n.getMethods(),j.forEach(function(a){"<init>"===a.name||null!==p&&p!==a.name||null!==q&&q!==a.raw_descriptor||i(a)})),0!==(262144&e)&&null===q&&(k=n.getFields(),k.forEach(function(a){(null===p||p===a.name)&&i(a)})),m},a["getNamedCon(I[Ljava/lang/Object;)I"]=function(a,b,d){a.setStatus(7),a.getBsCl().initializeClass(a,"Ljava/lang/invoke/MethodHandleNatives$Constants;",function(e){if(null!==e){var f=e.getFields().filter(function(a){return a.accessFlags.isStatic()&&a.accessFlags.isFinal()});if(b<f.length){var g=f[b];d.array[0]=c.initString(a.getBsCl(),g.name),a.asyncReturn(e.staticGet(a,g.name))}a.asyncReturn(-1)}})},a["getMemberVMInfo(Ljava/lang/invoke/MemberName;)Ljava/lang/Object;"]=function(a,b){var d=b.vmtarget,e=b.get_field(a,"Ljava/lang/invoke/MemberName;flags")>>>24;return new c.JavaArray(a.getBsCl().getInitializedClass(a,"[Ljava/lang/Object;"),[a.getBsCl().getInitializedClass(a,"J").createWrapperObject(a,f.fromNumber(5===e||9===e||d instanceof h.Field?d.slot:-1)),d instanceof h.Field?d.cls.getClassObject(a):b])},a}(),J=function(){function a(){}return a["invokeExact([Ljava/lang/Object;)Ljava/lang/Object;"]=function(a){a.throwNewException("Ljava/lang/UnsupportedOperationException;","MethodHandle.invokeExact cannot be invoked reflectively")},a["invoke([Ljava/lang/Object;)Ljava/lang/Object;"]=function(a){a.throwNewException("Ljava/lang/UnsupportedOperationException;","MethodHandle.invoke cannot be invoked reflectively")},a["invokeBasic([Ljava/lang/Object;)Ljava/lang/Object;"]=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];var d,e=b[0],f=e.get_field(a,"Ljava/lang/invoke/MethodHandle;form"),g=f.get_field(a,"Ljava/lang/invoke/LambdaForm;vmentry");d=g.vmtarget,a.setStatus(7),a.runMethod(d,b,function(b,c){b?a.throwException(b):a.asyncReturn(c)})},a}();registerNatives({"java/lang/Class":n,"java/lang/ClassLoader$NativeLibrary":o,"java/lang/ClassLoader":p,"java/lang/Compiler":q,"java/lang/Double":s,"java/lang/Float":t,"java/lang/Object":u,"java/lang/Package":v,"java/lang/ProcessEnvironment":w,"java/lang/reflect/Array":x,"java/lang/reflect/Proxy":y,"java/lang/Runtime":z,"java/lang/SecurityManager":A,"java/lang/Shutdown":B,"java/lang/StrictMath":C,"java/lang/String":D,"java/lang/System":E,"java/lang/Thread":F,"java/lang/Throwable":G,"java/lang/UNIXProcess":H,"java/lang/invoke/MethodHandleNatives":I,"java/lang/invoke/MethodHandle":J})});