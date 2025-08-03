import { useRef } from "react";

function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <div className="flex justify-center">
      <SubOtpBox ref = {ref1}
        onDone={() => {
          ref2.current.focus();
        }}
      />
      <SubOtpBox ref = {ref2}
        onDone={() => {
          ref3.current.focus();
        }}
      />
      <SubOtpBox ref = {ref3}
        onDone={() => {
          ref4.current.focus();
        }}
      />
      <SubOtpBox ref = {ref4}
        onDone={() => {
          ref5.current.focus();
        }}
      />
      <SubOtpBox ref = {ref5}
        onDone={() => {
          ref6.current.focus();
        }}
      />
      <SubOtpBox ref = {ref6}/>
    </div>
  );
}

function SubOtpBox({ref, onDone}) {
  return (
    <div>
      <input ref = {ref} onChange={(e) => {
        onDone();
      }}
        type="text"
        className="w-[40px] h-[50px] m-1 rounded-xl bg-[#8080804D] outline-none p-3 text-white"
      />
    </div>
  );
}

export default Otp;
