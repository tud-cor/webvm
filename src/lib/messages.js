const color= "\x1b[1;35m";
const underline= "\x1b[94;4m";
const normal= "\x1b[0m";
export const introMessage_original = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"| WebVM is a virtual Linux environment running in the browser via WebAssembly |",
	"|                                                                             |",
	"| WebVM is powered by the CheerpX virtualization engine, which enables safe,  |",
	"| sandboxed client-side execution of x86 binaries, fully client-side          |",
	"|                                                                             |",
	"| CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based  |",
	"| file system, and a Linux syscall emulator                                   |",
	"|                                                                             |",
	"| Your own WebVM with custom images via Dockerfile:                           |",
	"|                                                                             |",
	"| " + underline + "https://leaningtech.com/mini-webvm-your-linux-box-from-dockerfile-via-wasm" + normal +"  |",
	"|                                                                             |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"",
	"   Welcome to WebVM. If unsure, try these examples:",
	"",
	"     python3 examples/python3/fibonacci.py ",
	"     gcc -o helloworld examples/c/helloworld.c && ./helloworld",
	"     objdump -d ./helloworld | less -M",
	"     vim examples/c/helloworld.c",
	"     curl --max-time 15 parrot.live  # requires networking",
	""
];
export const introMessage = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"| This is a virtual Linux environment running in a browser. It runs Bash.     |",
	"|                                                                             |",
	"| Run 'help' to see help content.                                             |",
	"|                                                                             |",
	"| If you remove a file or directory by accident, reset the file system using  |",
	"| the spinning disk icon in the left toolbar (under the chip) and choose the  |",
	"| 'Reset disk' option (with the trash can icon). Confirm the reset and wait   |",
	"| for the VM to reload.                                                       |",
	"|                                                                             |",
	"| Note: the virtual 'hard drive' is hosted remotely and can therefore be a    |",
	"| bit slow sometimes. Be sure to allow for sufficient time when executing     |",
	"| commands or trying to run programs.                                         |",
	"|                                                                             |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+"
];
export const errorMessage = [
	color + "CheerpX could not start" + normal,
	"",
	"CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
	"",
	"Give it a try from a desktop version / another browser!",
	"",
	"CheerpX internal error message is:",
	""
];
export const unexpectedErrorMessage = [
	color + "WebVM encountered an unexpected error" + normal,
	"",
	"Check the DevTools console for further information",
	"",
	"Please consider reporting a bug!",
	"",
	"CheerpX internal error message is:",
	""
];
