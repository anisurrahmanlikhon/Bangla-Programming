# বাংলা প্রোগ্রামিং 
### ডকুমেন্টেশন

```Python
লিখি("ওহে বাংলা প্রোগ্রামিং");
```

### ইনপুট ও আউটপুট
```Python
// Input & Ouput
ধরি নাম = ইনপুট ('তোমার নাম লিখো')
ধরি বয়স = ইনপুট ('তোমার বয়স লিখো')
লিখি(নাম + " এর বয়স " + বয়স);
```
### শর্ত (কন্ডিশন স্টেটমেন্ট)
```Python
// Conditional Statement
ধরি নাম = "অজানা";
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
### লিস্ট ডিক্লেয়ারেশন 
```Python
// List Declaration 
ধরি ফলসমূহ = ["আম", "জাম", "কাঠাল","লিচু"];
// লিস্ট একসাথে প্রিন্ট হবে[]
লিখি(ফলসমূহ)  
// লিস্ট আলাদাভাবে প্রিন্ট হবে
লিখি(ফলসমূহ[0])
লিখি(ফলসমূহ[1])
লিখি(ফলসমূহ[2])
লিখি(ফলসমূহ[3])
```
### টাপল ডিক্লেয়ারেশন
```Python
// Tuple Declaration
ধরি পরিচিতি = ["আনিছুর", 29, "বাংলাদেশ"]
লিখি(পরিচিতি[0] + " "  + পরিচিতি[2] +  " এ থাকে")
```
### লিস্টে অবজেক্ট বা বস্তু
```Python
// Object in List
ধরি ছাত্র = {নাম: "আনিছুর", বিষয়:"পিজিডি আইটি", সিজিপিএ: 3.81, বিশ্ববিদ্যালয়:"জাহাঙ্গীরনগর বিশ্ববিদ্যালয়"};
লিখি ("ছাত্রের নাম: " + ছাত্র.নাম)
লিখি ("ছাত্রের বিষয়: " + ছাত্র.বিষয়)
লিখি ("ছাত্রের সিজিপিএ: " + ছাত্র.সিজিপিএ)
লিখি ("ছাত্রের বিশ্ববিদ্যালয়: " + ছাত্র.বিশ্ববিদ্যালয়)
```
### ডিকশনারি 
```Python
ধরি ফোনবুক = {
'আনিছুর':'০১৭৫৬০০০০০০',
'লিখন':'০১৯৫২০০০০০০',
'কবি':'০১৫৬৮০০০০০০',
'লেখক':'০১৮৫৬০০০০০০',
}
লিখি("কবির ফোন নং: " + ফোনবুক['কবি'])
```
### ফাংশন ডেফিনিশন
```Python
// Function Definition
কাজ গণনা(অ, ব) {
ফল (অ + ব)
}

ধরি যোগ = গণনা(5, 10);
লিখি (যোগ)
```
### রিকার্সিভ ফাংশন
```Python
// Find Factorial 
কাজ ফ্যাক্ট(ক)
{
   যদি (ক == 1)
   {
    ফল ক;
   }
   নাহলে
   {
    ফল ক * ফ্যাক্ট(ক - 1);
   }
}
ধরি ফ্যাক্টরিয়াল = ফ্যাক্ট(5);
লিখি("৫ এর ফ্যাক্টরিয়াল = " + ফ্যাক্টরিয়াল)
```
```Python
// Find Fibonacci Series
কাজ ফিবোনাক্কি (নাম্বার)
{
  যদি(নাম্বার <= 1)
  {
     ফল নাম্বার;
  }
  নাহলে
      {
       ফল ফিবোনাক্কি(নাম্বার-1) +  ফিবোনাক্কি(নাম্বার-2);
      }
}

ধরি ক;
ধরি নাম্বার = ইনপুট("কততম ফিবোনাক্কি সিরিজ নিবে?");
লিখি("ফিবোনাক্কি সিরিজ: ");
লুপ (ক = 1; ক < নাম্বার; ক++)
   {
     লিখি(ফিবোনাক্কি(ক));
   }
```

### বস্তু তৈরি করার ফাংশন
```Python
// Object in Function
কাজ মানুষ(নাম, বয়স, দেশ) 
{
 ফল {নাম, বয়স, দেশ} // ফল মানে রিটার্ন
}

ধরি লিখন = মানুষ("লিখন", 29, "বাংলাদেশ");

লিখি ("লিখন " + লিখন.দেশ + " এ বসবাস করে।") 

```

### কথা বলো ফাংশন
```Python
// Speak in English
বলো ('How are you');

//শুধু ইংরেজি ভাষা বলতে পারবে

কাজ হ্যালো(){
ধরি নাম = ইনপুট ('তোমার নাম লেখো')
বলো ('Hello '+ নাম )
}

হ্যালো ()
```
### নাম্বার গেসিং খেলা
```Python
// Number Guessing Game
// তোমাকে রান্ডম নম্বর গেস করতে হবে 0 - 10;
ধরি ক = রান্ডম(10);
ধরি খ = ইনপুট ('নম্বর টা গেস করো');


কাজ চেক (){
যদি (খ == ক){
   লিখি ('তুমি ঠিক ধরেছ, সংখ্যাটি হলো '+ খ)
   বলো ('You are right, the random number is ' + খ)
}নাহলে যদি (খ > ক){
  খ = ইনপুট('তুমি একটা বড় সংখ্যা ধরেছ');
  চেক ()
} নাহলে যদি (খ < ক){
 খ = ইনপুট ('তুমি একটা ছোট সংখ্যা ধরেছ')
 চেক ()
  }
}

চেক()
```
