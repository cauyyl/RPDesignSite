/*
*全局变量定义文件
*引用顺序：1
*/

/*
/////////////
全局变量定义
/////////////
*/

//牙齿标志点列表
var teethPos = 
[
	[[184.5,345],[188.5,327],[178.5,361],[164.5,337],[202.5,350],[174.5,329],[201.5,335],[166.5,352],[193.5,359],[149,340],[221,352]],
	[[190.5,308],[194.5,292],[188.5,327],[169.5,302],[213.5,314],[180.5,293],[211.5,300],[174.5,318],[207.5,327],[154,298],[225,319]],
	[[197.5,270],[201.5,252],[194.5,292],[176.5,266],[220.5,275],[184.5,252],[218.5,259],[177.5,281],[214.5,292],[164,260],[231,280]],
	[[206.5,237],[209.5,223],[201.5,252],[188.5,229],[224.5,243],[198.5,223],[223.5,230],[190.5,242],[215.5,250],[179,227],[241,247]],
	[[219.5,209],[222.5,195],[209.5,223],[201.5,202],[237.5,215],[210.5,195],[235.5,203],[201.5,214],[225.5,224],[192,195],[250,218]],
	[[231.5,181],[240.5,169],[222.5,195],[219.5,170],[242.5,192],[230.5,166],[246.5,180],[216.5,180],[233.5,194],[211,163],[257,201]],
	[[253.5,163],[265.5,155],[240.5,169],[246.5,153],[260.5,171],[257.5,150],[265.5,163],[240.5,160],[250.5,173],[244,134],[267,186]],
	[[283.5,153],[301.5,151],[266.5,156],[281.5,139],[284.5,168],[294.5,141],[295.5,160],[270.5,144],[274.5,164],[279,126],[287,178]],
	[[319.5,152],[301.5,151],[335.5,156],[320.5,138],[316.5,167],[309.5,141],[307.5,161],[333.5,143],[328.5,163],[325,125],[315,177]],
	[[348.5,161],[335.5,156],[359.5,168],[355.5,151],[340.5,171],[345.5,150],[337.5,164],[361.5,159],[350.5,172],[362,135],[331,184]],
	[[369.5,181],[359.5,168],[378.5,196],[384.5,170],[356.5,190],[372.5,166],[356.5,180],[385.5,184],[368.5,195],[392,165],[340,196]],
	[[381.5,210],[378.5,196],[389.5,224],[399.5,200],[365.5,217],[390.5,195],[368.5,203],[400.5,214],[376.5,222],[411,196],[351,215]],
	[[394.5,235],[389.5,224],[399.5,250],[413.5,228],[376.5,242],[403.5,223],[380.5,230],[410.5,242],[385.5,250],[425,227],[362,243]],
	[[403.5,271],[399.5,250],[408.5,292],[426.5,263],[381.5,277],[415.5,252],[383.5,260],[424.5,281],[389.5,292],[441,263],[371,278]],
	[[408.5,310],[408.5,292],[411.5,327],[431.5,304],[387.5,316],[423.5,292],[392.5,298],[426.5,321],[395.5,327],[451,305],[378,314]],
	[[417.5,344],[411.5,327],[421.5,370],[437.5,337],[396.5,346],[427.5,328],[401.5,334],[433.5,354],[404.5,357],[454,347],[379,347]],
	[[415,411],[414,430],[413,378],[437,410],[397,410],[431,425],[398,424],[429,393],[403,393],[454,409],[381,407]],
	[[412,450],[406,469],[414,430],[434,451],[394,449],[427,471],[395,461],[430,437],[399,434],[450,458],[379,445]],
	[[398,491],[391,513],[406,469],[420,499],[380,485],[409,513],[378,501],[418,479],[389,472],[435,504],[370,481]],
	[[387,529],[378,542],[391,513],[402,538],[373,522],[391,545],[371,533],[403,522],[380,513],[417,545],[360,512]],
	[[371,556],[364,568],[378,542],[387,563],[358,547],[376,569],[359,557],[385,550],[367,542],[401,573],[351,538]],
	[[356,581],[345,588],[365,568],[368,591],[345,569],[356,592],[344,578],[370,579],[354,566],[379,601],[338,560]],
	[[334,593],[323,596],[345,588],[339,608],[330,579],[329,604],[325,586],[345,598],[338,582],[344,625],[326,569]],
	[[311,599],[301,598],[323,596],[313,612],[309,587],[304,607],[304,591],[320,605],[316,590],[314,629],[308,574]],
	[[289,599],[301,598],[279,596],[286,612],[291,588],[296,608],[297,592],[280,605],[285,592],[285,629],[291,573]],
	[[266,593],[279,596],[255,589],[262,607],[270,579],[272,604],[275,586],[256,599],[263,584],[256,623],[272,568]],
	[[243,579],[255,589],[236,569],[231,590],[257,568],[244,594],[257,579],[231,577],[246,566],[217,598],[262,559]],
	[[228,555],[236,569],[223,543],[214,562],[241,545],[224,568],[241,558],[216,550],[232,543],[199,567],[251,542]],
	[[213,529],[223,543],[209,514],[196,536],[229,522],[207,543],[230,535],[200,523],[222,513],[183,538],[241,518]],
	[[200,491],[209,514],[193,471],[181,498],[220,485],[189,512],[223,501],[181,481],[210,472],[167,500],[230,484]],
	[[188,451],[194,471],[185,431],[167,455],[205,449],[176,469],[205,461],[169,437],[201,434],[154,452],[221,447]],
	[[185,409],[185,431],[183,377],[164,410],[204,408],[169,425],[201,425],[171,395],[196,392],[147,404],[218,409]]
];

var topMidPos = [[78.5,261],[88.5,227],[94.5,190],[100.5,150],[110.5,123],[123.5,95],[140.5,68],[166.5,56],[201.5,52],[235.5,54],[260.5,68],[278.5,95],[290.5,123],[297.5,151],[309.5,191],[311.5,228],[321.5,270]];
var botMidPos = [[313,278],[314,330],[307,369],[292,413],[279,441],[265,468],[245,489],[222,496],[200,498],[179,497],[155,489],[136,470],[121,444],[109,414],[94,371],[85,331],[83,277]];

//按钮选择状态
var state = 0;

//是否绘制连接体
var isconndisped = false;

//是否允许编辑连接体
var isconnmodify = false;

//牙位选择器：选择的起始和终止牙位
var begin = -1;
var end = -1;
var current = -1;

//当前鼠标位置
var currentMousePos = [0,0];

//右键单击的牙齿
var toothSelected = -1;

//点击右键菜单前记录右键点击位置
var postRclickpos = [0,0];

//点击右键菜单前记录已经删除的备注条目位置信息
var remarkData = [];

//拖拽点距文本框左上角的相对位移
var measure = [0,0];

//上颌中心点坐标
var centerX = 297;
var centerY = 271;

//图片位置坐标
var picPosX1 = 200;
var picPosY1 = 150;

var picPosX2 = 200;
var picPosY2 = 400;

//操作队列
var actionList = [];
var actionCursor = -1;
var LastTeethList;
var LastQuadraticTops;



//被调整过的图层编号，以便保留handle
var adjustIndex = -2;
var adjustInnerindex = -2;



//上牙连接体中空部分边界点列表
var innerTopList = [];

//canvas画布对象
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");

//画布扩大后的临时处理
picPosX1 += 100;
picPosY1 += 100;
picPosX2 += 100;
picPosY2 += 100;