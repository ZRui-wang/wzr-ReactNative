'use strict'


/***
 * JavaScript小练习（一）
 * 1、使用严格模式；
 * 2、建议：箭头、普通函数都实现一下；
 * ***/



 /*****
 * 1、输出学生分数大于60分，只输出分数
 * 输出结果：
 * 91
 * 96
 * ****/
let student = [
	{name: 'tom', age: 21, score: 91},
	{name: 'Jim', age: 23, score: 96},
	{name: 'loser', age: 18, score: 20},
	{name: '🐨', age: 22, score: 59}
];

/** 方法 1 */
// student.forEach(item => {
// 	if (item.score > 60){
// 		console.log(item.score);
// 	}
//
// });

/** 方法 2 */
// let scoreAry = student.map(function (currentValue) {
// 	return currentValue.score;
// })
//
// let temp = scoreAry.filter(function (value) {
// 	console.log(`打印${value}`);
// 	if (value > 60){
// 		return true;
// 	} else {
// 		return false;
// 	}
// })

//console.log(temp);

/****
 * 2、将'talk is cheap show me the code'字符串中的每一个单词字符倒序;
 * 最终结果：'klat si paehc wohs em eht edoc'；
 * ****/

// let str = "talk is cheap show me the code";
// let ary = str.split(" ");
// var value = "";
// ary.forEach(item => {
// 	let strAry = item.split("");
// 	strAry.reverse();
// 	let valueStr = strAry.join("");
// 	value = value + `${valueStr}`;
// })

//console.log(value);

/****
 * 3、判断'stay hungry stay foolish'是否以'stay'开头,'foolish'结尾，如果是，截取'hungry';
 * ****/

let str = "stay hungry stay foolish";

if (str.startsWith("stay") && str.endsWith("foolish")){
	let ary = str.split(" ");
	ary.forEach(item => {
		if (item === "hungry"){
			console.log(item);
		}
	})
}



/****
 * 4、尝试使用数组的相关方法分别模拟栈、队列；
 * ****/



/****
 * 5、合并数组[2,4,6,8,4]、[1,3,5,8,6,7,9,5];然后对合并后的数组去重（不低于两种方式实现），并按递增排序输出；
 * ****/

// let ary1 = [2,4,6,8,4];
// let ary2 = [1,3,5,8,6,7,9,5];
// // ary2.forEach(item => {
// // 	ary1.push(item);
// // })
//
// let ary3 = ary1.concat(...ary2);
//
// ary3.sort((value1, value2) => {
// 	return value1 > value2 ? 1 : -1;
// })
// console.log(ary3);


/****
 * 6、延迟 3s 输出 "I was delayed by 3 seconds to execute" 字符串；
 * ****/

// function action(n) {
// 	console.log("进入程序");
// 	setTimeout(()=> {
// 		console.log("I was delayed by 3 seconds to execute");
// 	},n);
// }
//
// action(3000);


/****
 * 7、间隔2s输出从1开始的计数，每次加1，并在第5次输出后，取消该定时器。
 * ****/

function f() {
	console.log("开始");
	let n = 0;
	let id = setInterval(() => {
		n++;
		console.log(`${n}`);
		if (n === 5){
			clearInterval(id);
			console.log("关闭定时器");
		}
	},2000);
}

// f();


/****
 * 8、如下两个对象，如果需要执行userB.fn时输出 Paul ,请做出修改
 * 要求：1、严格模式；2、绑定的方式实现
 * ****/

let userA = {
	name:'Paul',
};

let userB = {
    name: 'Cook',

    fn: function () {
    	var f = () => {
    		console.log(this.name);
		}
		return f();
    }

}
userB.fn();

// let userA = {
//     name:'Paul',
// };
//
// let userB = {
//     name:'Cook',
//     fn:function () {
//
//         (function f() {
// //             console.log(userB.name);
// //         })();
// //     }
// };
//
// let userB = userA.bind(userA);
// userB.fn();



/****
 * 9、
 * 条件：给定一个无重复元素并且递增的排序数组，及一个目标值；
 * 需求：在这个数组中查找该目标值，并返回index；如果不存在，返回这个目标值将被按顺序插入的index；
 *（适当考虑时间复杂度）
 * ****/
/*
* 示例
* 输入: [2,4,6,7], 5
* 输出: 2
* */

// let searchIndex = (array, target) => {
//
// };





