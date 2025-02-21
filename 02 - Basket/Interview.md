**Interviewer:** Hello. How is it going?

**Candidate:** Hello. Yeah, I'm fine. Hope you're all too.

**Interviewer:** Yeah. Nice to meet you.

**Candidate:** Nice to meet you.

**Interviewer:** So this is the second interview. Am I correct?

**Candidate:** Yes, we are correct.

**Interviewer:** Yes. So this second interview is, let's say, more technical. We are going to ask you some technical questions, and it's up to you to answer. We don't expect that you will know everything. If you wouldn't know, just tell us, "Okay, I don't know." It's totally fine. We don't know everything either. We just want to know what you know. So before we start, do you have any questions?

**Candidate:** No.

**Interviewer:** No? Okay. So, which programming language are you experienced with?

**Candidate:** Go. Just Go.

**Interviewer:** No other language?

**Candidate:** Well, before that, I was writing in Perl and, yeah, partly front-end JavaScript. But for the last eight years, it's Go mostly.

**Interviewer:** So what is the evolution of Golang from your side? Eight years is long enough.

**Candidate:** Well, I remember the time when context was not even a part of the standard library, when it was a third-party package. I remember the time when the scheduler was not preemptive. So if you run a goroutine with a never-ending cycle, a never-ending loop, it would never stop.

**Interviewer:** Basically, yeah.

**Candidate:** I mean, I can say I like generics a lot because they make code quite complicated to understand for other developers, but in some cases, they make it much less. You can replace a lot of boilerplate with just one function. Otherwise, I like the simplicity. The learning curve is, if we compare to Rust, for instance, it's very much different. With Go, you can start writing production code much earlier. And the simplicity, I think, is the most important feature with it. And because of that, I think the Go community is so strong.

**Interviewer:** You mentioned Rust. Have you tried it for your Sunpad project?

**Candidate:** I started learning it but didn't have enough time because, oh sorry, my browser tells me I need to stop and keep my eyes healthy, you know. Yeah, I mean, I was trying it a year or two ago, didn't go much with it. So if you ask something about Rust, probably I wouldn't reply.

**Interviewer:** No, it's fine. I only wanted to ask about the learning curve. If it was a hard time or if it was well...

**Candidate:** It's definitely harder than Go. Okay, but the majority of languages are harder than Go.

**Interviewer:** Okay, but let's keep it cool. Okay, I think that we can start with the questions. So our first question is, how are we handling error processing in Go? What is the definition of the error type? And can you tell us something about panic? And do you have some best practices about errors in Go?

**Candidate:** Yeah, sure. So error is basically an interface with just one method, which is supposed to return a string. So any type which implements this interface can be used as an error. How do we work with errors? We usually return them from functions as the last argument. We usually wrap them with `fmt.Errorf` so that we can add context to every error. And if we see our message, we can see by prefixes where actually it happens. So yeah, errors are usually traced in the logs, which are then can be found either in special traces like UpTrace or Graylog or anywhere else. I mean, Sentry also, for instance, like a third-party service.

**Interviewer:** What other questions did we have about the error? Sorry, any panics?

**Candidate:** Panics, yeah. Well, ideally, you should write your code without any panics at all. If you have a panic, it must be really something very odd which should not ever happen. So what you should do, you should return your errors up by your stack and then trace them somewhere so that you can easily search them later if you need it.

**Interviewer:** Do you use some error library? I mean, something else instead of the standard package library?

**Candidate:** The standard package library should be enough for most of your purposes, I would say. Definitely.

**Interviewer:** Okay, I think that we cover everything from errors. Okay, so optional values. How would you represent, let's say, a situation where you have a structure, Person, and this person has an optional field, which is age? And why is it optional? Because sometimes you don't know the age of the person. How are you going to represent that?

**Candidate:** Well, it depends if zero age is a meaningful value for you. If you want to distinguish between zero and not defined, then you would use a pointer for that. And yeah, that's basically how it's done.

**Interviewer:** Okay, so pointers. What is the pointer?

**Candidate:** A pointer is a data type which basically holds a reference to another variable, to some memory space. Yeah, so you can create a pointer by referencing another variable. By default, all the pointers have a nil value. And yeah, there is also the concept of type nil. So nil of different types is not equal. So if you compare two interface values that hold different types inside but both nil, they're not equal.

**Interviewer:** Okay, and how is nil represented in memory?

**Candidate:** Sorry, represented where? In memory? This is the first time I have this question. I never thought about it. I know that when you don't want any space allocated, you usually use an empty struct for maps, for instance.

**Interviewer:** How is nil represented? In another way, where is the nil pointing to?

**Candidate:** Pointing to nowhere. But when you print it, it would be something like `0x0`, as far as I remember.

**Interviewer:** Yeah, so if addressing of your memory starts with one, nil points to zero.

**Candidate:** I see.

**Interviewer:** Okay, cool. And do you know what is the size of the pointer?

**Candidate:** Well, it's supposed to be an integer, probably four bytes.

**Interviewer:** That's true. And can it be something else? You mean not four bytes?

**Candidate:** Yeah, sometimes it's four bytes, sometimes it's something else. Well, it probably depends on if you have a 32 or 64-bit system. Yeah, so on 32-bit, it's four; on 64-bit, it's eight.

**Interviewer:** Perfect. What is the structure in Golang?

**Candidate:** Structure is a collection of fields.

**Interviewer:** Structure is the collection of the fields. Yeah, that's correct. And what is the size of the structure in the memory when the structure has one property and the type of the property is float32?

**Candidate:** Float32 is probably four bytes. I mean, if it's just one field, probably four bytes. I mean, there is no additional space for anything, as far as I remember. At least that's correct.

**Interviewer:** Okay, cool. Okay, context. You already mentioned it. So we mean, what is the context from the standard library?

**Candidate:** Context is usually passed as the first argument to the function, even if you don't use it better to pass it because you can use it later just to avoid additional job for passing it. Context is used either to handle timeouts or to handle request-scoped data. So if you need to pass some variable, but context, as long as to get value from the context, you basically get an interface which you need to typecast. So there is no compile-time check. So it's not a good way if you want to inject some dependency. You would not have this check. So ideally, to have no panic or unexpected behavior, better not do it.

**Interviewer:** Perfect. There is a hierarchy between contexts. So from the parent context, you can create a child context. My question is, what happens to the parent context when you cancel a child context?

**Candidate:** When you cancel the child, the parent is not canceled. When you cancel the parent, the child is canceled.

**Interviewer:** Perfect. Okay, which collection types do we have in Go? Which types of collections are there?

**Candidate:** Are you talking about slices and arrays?

**Interviewer:** Okay, slices and there is... Well, maps are not a collection, it's a hash table, basically. So slices and there is...

**Interviewer:** Okay, okay. Can you tell us the difference between a slice and an array?

**Candidate:** Well, a slice is basically a window over an array. So it's a structure holding a length, capacity, and a pointer to the first element of the slice. So you can have multiple slices over the same array. There can be an empty slice. Yeah, there is also an append function which can double your array if there is no capacity for the element.

**Interviewer:** And what is the difference between a slice and a map in Golang?

**Candidate:** Well, a slice is a list; a map is a hash table.

**Interviewer:** What is a list? Because a list in different languages means something else, for example.

**Candidate:** Okay, so it's a collection of elements. A map, basically, you have keys, you have values. In Java, a list means a linked list, which is in Java. So can you be more specific?

**Candidate:** Well, technically, a map is a collection of buckets on the low level. So there is some relation between them. Yeah, every bucket can have like eight elements, as far as I remember. There is also a process of bucket evacuation when there is not enough space. So, and how does a hash map work?

**Interviewer:** Well, basically, you have a hash function, and you use low bits to find the bucket and high bits to find the value in the bucket. Every bucket can have eight values, as far as I remember. So a map is basically a list of buckets. If there is not enough space, it creates another bucket and attaches it to the bucket where it doesn't have space. Well, as I said, there is an evacuation process. That's why you can't reference a value because it can be moved to another place. Basically, that's it.

**Interviewer:** Okay, so you have a key, so you compute the hash from the key. Is there anything special about this hash function?

**Candidate:** Well, ideally, it should have no collisions.

**Interviewer:** Mm-hmm, okay, correct. So, and what happens then? Okay, so you said, okay, you use the hash function or hash to find the particular bucket, and you also said that a bucket can contain eight items. Yeah. Okay, so...

**Candidate:** What would happen if you found the bucket with another eight items? You mean if there is no space when you insert?

**Interviewer:** No, no, no, no. Actually, currently, you don't know if there is enough space. So you have to find it out. So how are you going to proceed? But forget about increasing space. So you would find a bucket, and there are four items. Let's make it easier. So what's going to happen next?

**Candidate:** You mean how we find the value inside the bucket? Well, as far as I remember, it uses high bits to find the value.

**Interviewer:** Oh, sorry, you use what? High bits, low bits to find the bucket, high bits to find the value.

**Candidate:** Yeah, we have a bucket, but how do we find the value in the bucket using high bits from the value of the hash function?

**Candidate:** So the value is kept in the bucket so that the real... There are two lists, as far as I remember. The first list is the list of high bits, and the second list is keys and values packed together. First, all the keys, then all the values. Something like that.

**Interviewer:** Can it happen that there will be, let's say, two keys with the same two high bits?

**Candidate:** You mean, well, technically, it can. I can't remember, to tell the truth. So I mean, like, I remember more or less, but I can't remember the details.

**Interviewer:** Perfect. Can a struct be a key type in a map?

**Candidate:** As far as I remember, comparable types.

**Interviewer:** What is a comparable type?

**Candidate:** Well, basically, not slices, not maps, not functions, and probably not channels, as far as I remember. So something else you can compare. Well, strings, integers, pointers, you can compare. Probably, maybe you mean some specific type.

**Interviewer:** Okay, if there would be a function, how would this function be represented? Let's say if there would be in the structures, there would be a field with the type of the function. How would it be represented in memory?

**Candidate:** No, sorry, there is a structure, and this structure has a property, and the type of this property is a function. But for the key of the map...

**Interviewer:** No, no, I mean if a structure has any uncomparable fields, it can be a key of the map. But if it has only comparable fields, then it can be.

**Candidate:** Yeah, but how does a function will be represented as a property in the structure?

**Interviewer:** Well, you have an instance of the structure. Well, probably, yeah, a function is represented as an entry point reference to an entry point, probably which is an address reference. Potentially, we can compare them.

**Candidate:** And potentially, a function then can be a map key, maybe. But I'm not quite sure. I haven't done that before.

**Interviewer:** Yeah, that's correct. And why I was asking is that you mentioned everything, but you forgot pointers. So some reference. Also, you can reference other structures.

**Candidate:** Yeah, okay. Cool.

**Interviewer:** Goroutines. What is a goroutine? How is a goroutine related to a thread? And does it have any pros? Does it have any cons? What is your, let's say, opinion about goroutines?

**Candidate:** Well, goroutines are like an analogy of processes for the system scheduler. So basically, it's like threads, Go threads for the Go scheduler. Basically, you have a GMP model with goroutines, threads, and CPU cores. So you have a pool of threads for each core. There is a system thread executing a routine one at a time plus a queue with goroutines to each thread. There is also a global queue. If some thread doesn't have any more routines in the queue, it can steal it from another thread. Goroutines can be in multiple states. So either it can be being executed by the thread, can be blocked on a channel or mutex or system call, or it can wait in the queue to be executed. There are different kinds of race conditions which can happen, like deadlock, livelock, and others.

**Interviewer:** So basically, there are like two variables, GOMAXPROCS and NumCPU. GOMAXPROCS indicates the max number of system threads which can execute your goroutines, and NumCPU basically is like the number of cores, like the max value for GOMAXPROCS. In earlier versions, GOMAXPROCS was one, as far as I remember. Then they changed it to NumCPU by default.

**Candidate:** What else? Something else?

**Interviewer:** Does it have any cons? Any cons compared to the C system scheduler or...

**Candidate:** Yeah, definitely, because the system scheduler is basically preemptive, while Golang is cooperative dash preemptive, which makes the number of context switches much fewer. So not so much time is spent on that. And goroutines are much more lightweight compared to system processes. So you can create a lot of them.

**Interviewer:** Perfect. Anything else? What does lightweight mean? You mean the stack size? The goroutine size?

**Candidate:** Yeah, basically, well, by default, it's four kilobytes, probably something like that. And it can grow up to probably 256 megabytes on 32-bit operating systems and 512 on 64-bit.

**Interviewer:** Okay, perfect. You mentioned the stack. So can you tell us what stack and heap are? I mean, from the memory layout perspective, let's say, why do we have those two approaches? What are the pros of each approach? So can you describe it?

**Candidate:** Yeah, sure. So the heap is a place for some data which can be referenced from multiple places, and it's like additional job for the garbage collector. So every time you initialize some global variable, for instance, or return a pointer to a local variable or create a local variable which is too large, it's allocated on the heap. There is escape analysis, a special flag which can show you if a variable escapes to the heap or not. I mean, you can profile your application with pprof, for instance. It will show you if the garbage collector is called too often. You will see functions with GC in their name. And if something like that happens, maybe you should think either about not using pointers so much or maybe using sync pool or, well, memory arena probably is too early. It's too...

**Interviewer:** Have you tried them?

**Candidate:** Not yet. I mean, I had no case for that.

**Interviewer:** Yeah, most people would not have.

**Candidate:** Yeah, exactly. So there are, for the garbage collector, you have GOGC variable, which you can play with, make it larger or smaller. If you make it larger, you will have memory peaks higher, but CPU would not be consumed so much. So smaller, vice versa, something like that.

**Interviewer:** Perfect. So heap and stack. Why is there a stack? Does the stack have any advantage against the heap?

**Candidate:** Well, the stack is automatically cleaned up, so there is no job for the garbage collector, basically.

**Interviewer:** How is it achievable?

**Candidate:** It's achievable by the way it's implemented. So I mean, when a function is called, all the variables are copied to its stack, basically. And when the function finishes, the stack is simply cleaned up, something like that.

**Interviewer:** Yeah, so you know how it will be processed during the computation time.

**Candidate:** Perfect.

**Interviewer:** You also mentioned the garbage collector. Can you, let's say, describe it more deeply?

**Candidate:** Well, I can remember that it works with mark and sweep. So it just marks all the memory space which is still used by something, and then sweep basically removes everything which is not referenced. Something like that. I can't remember the details. There is something like three colors: white, gray, or...

**Interviewer:** Yeah, oh, it's fine. It's complicated