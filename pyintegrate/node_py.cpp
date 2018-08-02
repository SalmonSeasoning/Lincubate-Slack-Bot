#include "python.hpp"
#include <node.h>

namespace nodepy {

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

  void init(Local<Object> exports) {
    
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME, init);

}
