# Compile-time vs Runtime Polymorphism

> [!NOTE]
> We know that method overloading is not possible in JS. So compile-time polymorphism is not relavant here. Still I've added this section as this is an important to know the differentiation between compile-time and runtime polymorphism.

## Compile-time Polymorphism

Compile-time Polymorphism or static binding or early binding is the capacity of a programming language to device which method or function to be used depending on the number arguments passed. This type of polymorphism is done by method or operator overloading. <br/>
During the compilation phase, the compiler analyze the function that has to be used. It checks the arguments and according to the arguments, compiler bind the function call to appropriate function body. As these process is done during the compilation time, this is called compile-time polymorphism.

> [!NOTE]
> Binding refers to connecting the function call to the function body.

> [!NOTE]
> JavaScript doesn't support method overloading.

## Run-time Polymorphism

Method overriding provides Run-time polymorphism or dynamic binding or late binding. We know method override occurs when the subclass defines the same method that is already defined in the superclass.
In this case, the correct method to execute is decided at runtime based on the type of the object which is invoking the method. So this type of polymorphism is called runtime polymorphism.

## Why dynamic binding is not possible during compile-time?

**Compile-Time:** This is when the code is being compiled. At this stage, the compiler checks for syntax errors, type correctness, and other issues. However, the exact type of an object (and therefore which method to call) might not be fully known until the program is actually running. <br/><br/>
**Runtime:** This is when the code is actually being executed. At runtime, the exact type of an object is known, and the appropriate method can be determined and executed.
<br/>
So the reason method overriding is resolved at runtime and not at compile time is because the actual type of the object isn't always known until the program is executed.

## Differences between compile-time and runtime polymorphism (_GeeksforGeeks_)

| **Compile-time Polymorphism**                                              | **Runtime Polymorphism**                                            |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| In Compile time Polymorphism, the call is resolved by the compiler.        | In Run time Polymorphism, the call is not resolved by the compiler. |
| It is also known as Static binding, Early binding and overloading as well. | It is also known as Dynamic binding or Late binding.                |
| It is achieved by method overloading                                       | It is achieved by method overriding                                 |
| Inheritance is not involved.                                               | Inheritance is involved.                                            |
