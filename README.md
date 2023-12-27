# বাংলা প্রোগ্রামিং ল্যাঙ্গুয়েজ ডকুমেন্টেশন

### ভেরিয়েবল ডিক্লেয়ারেশন

```Python
// Variable Declaration
ধরি নাম = "আনিছুর";
ধরি বয়স = 29;
লিখি(নাম + " এর বয়স " + বয়স);
```
### শর্ত (কন্ডিশন স্টেটমেন্ট)
```Python
// Condition Statement
ধরি নাম = "আনিছুর";
যদি (নাম == "আনিছুর") {
লিখি("হ্যালো আনিছুর");
} নাহলে যদি (নাম == "লিখন") {
লিখি("হ্যালো লিখন");
} নাহলে {
লিখি("ঘোড়ার ডিম! তোমার নাম কি?");
}
```
### লুপ (লুপায়িত স্টেটমেন্ট)
```Python
// while লুপ
ধরি ক = 1;
ধরি খ = 10;
অব্দি(ক < খ) {
লিখি(ক);
ক = ক + 1;
}
```
```Python
// for লুপ
ধরি ক = 1;
ধরি খ = 10;
লুপ(ক = 0; ক < 10; ক++)
{
লিখি (ক);
}
```
### অ্যারে ও অবজেক্ট
```Python
// Array Declaration
ধরি ফলসমূহ = ["আম", "জাম", "কাঠাল","লিচু"];
// লিস্ট একসাথে প্রিন্ট হবে[]
লিখি(ফলসমূহ)  
// লিস্ট আলাদাভাবে প্রিন্ট হবে
লিখি(ফলসমূহ[0])
লিখি(ফলসমূহ[1])
লিখি(ফলসমূহ[2])
লিখি(ফলসমূহ[3])
```
```Python
// Object in Array
ধরি ছাত্র = {নাম: "আনিছুর", বিষয়:"পিজিডি আইটি", সিজিপিএ: 3.81, বিশ্ববিদ্যালয়:"জাহাঙ্গীরনগর বিশ্ববিদ্যালয়"};
লিখি ("ছাত্রের নাম: " + ছাত্র.নাম)
লিখি ("ছাত্রের বিষয়: " + ছাত্র.বিষয়)
লিখি ("ছাত্রের সিজিপিএ: " + ছাত্র.সিজিপিএ)
লিখি ("ছাত্রের বিশ্ববিদ্যালয়: " + ছাত্র.বিশ্ববিদ্যালয়)
```
### ফাংশন ও ক্লাস
```Python
// Function Definition
কাজ গণনা(অ, ব) {
ফল (অ + ব)
}

ধরি যোগ = গণনা(5, 10);
লিখি (যোগ)
```

### বস্তু তৈরি করার কাজ
```Python
// Object in Function
কাজ মানুষ(নাম, বয়স, বাসস্থান) {
 ফল { নাম, বয়স, বাসস্থান }
}

ধরি লিখন = মানুষ("লিখন", 29, "বাংলাদেশ");

লিখি (লিখন)
```

### বলো কাজ
```Python
// Speak in English
বলো ('How are you');

//শুধু ইংরেজি ভাষা বলতে পারবে

কাজ হ্যালো(){
ধরি নাম = ইনপুট ('তোমার নাম লেখো ')
বলো ('Hello '+ নাম )
}

হ্যালো ()
```

### নাম্বার গেসিং খেলা
```Python
// Number Guessing Game
// তোমাকে রেন্ডম নম্বর গেস করতে হবে 0 - 10;
ধরি ক = রান্ডম(10);
ধরি খ = ইনপুট ('নম্বর টা গেস করো ');


কাজ চেক (){
যদি (খ == ক){
   লিখি ('তুমি ঠিক ধরেছ, সংখ্যা টা ছিল  ' + খ)
   বলো ('You are right, the random number is ' + খ )
}নাহলে যদি (খ > ক){
  খ = ইনপুট('তুমি একটা বড় সংখ্যা ধরেছ ');
  চেক ()
} নাহলে যদি (খ < ক){
 খ = ইনপুট ('তুমি একটা ছোট সংখ্যা ধরেছ ')
 চেক ()
  }
}

চেক()
```
