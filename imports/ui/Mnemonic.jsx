import React, { useState } from "react";
import ethLightwallet from "eth-lightwallet";

export const Mnemonic = () => {
  const [mnemonic, setMnemonic] = useState("");

  const test = () => {
    let mnemonic = ethLightwallet.keystore.generateRandomSeed(); // 함수 실행후 랜덤된 12개 단어배열 얻음
    console.log(mnemonic); // 지갑생성
    setMnemonic(mnemonic);

    // ethLightwallet.keystore.createVault({
    //   password: "123123",
    //   seedPhrase: mnemonic,
    //   hdPathString: "m/0'/0'/0'",
    // });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Test</h1>

      <div className="flex font-sans">
        <div className="flex-none w-60 relative">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-1100">
              Metamask
            </h1>
            <div className="text-lg font-semibold text-slate-500">미정</div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Transfer
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
                onClick={test}
              >
                Mnemonic Check
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-1000">{mnemonic}</p>
        </form>
      </div>
    </div>
  );
};
