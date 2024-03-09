// 获取指定智能合约方法的输入参数编码
function encodeFunctionCallData(web3, abi, functionName, params) {
  const functionAbi = abi.find(item => item.name === functionName);
  const encodedParams = web3.eth.abi.encodeFunctionCall(functionAbi, params);
  return encodedParams;
}

// 获取指定智能合约方法的输出参数解码
function decodeFunctionCallResult(web3, abi, functionName, resultData) {
  const functionAbi = abi.find(item => item.name === functionName);
  const decodedResult = web3.eth.abi.decodeFunctionCall(functionAbi, resultData);
  return decodedResult;
}