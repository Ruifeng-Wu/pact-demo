1. 部署 pact broker
2. consumer测试中创建一个Pact对象，作为provider替身
3. 写明测试需要mock的格式，测试后生成契约文件
4. 发布契约文件到broker
5. provider测试时向broker请求契约并验证
