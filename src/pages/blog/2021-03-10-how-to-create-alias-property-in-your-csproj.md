---
title: How to Use Extern Alias to differentiate assemblies with the same namespace in C#
date: '2021-03-10T24:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ["csharp", "csproj", "msbuild"]
---
If you run into two assemblies with identical class and namepsace, you won't be able to differentiate them unless you use extern aliases. In order to use extern aliases, you first need to open your .csproj file of your project. You then need to modify the PackageReference or ProjetReference by adding the \<Aliases\> attribute inside.
If it's another project in your solution:
			 		 

```xml-doc
// Project.csproj
<ProjectReference Include="..\Example.Project\Example.Project.csproj">
	<Aliases>CustomNamespace</Aliases>
</ProjectReference>
```

or in the case of a referenced Nuget

```xml
// Project.csproj
<PackageReference Include="Microsoft.CodeAnalysis.FxCopAnalyzers" Version="2.9.7">
	<Aliases>CustomNamespace</Aliases>
</PackageReference>
```

Then in any file you want to reference either project, simply use the following directive to make a distinction between both assemblies.

```csharp
// whatever.cs
extern alias CustomNamespace

// You can then make a distinction between the two assemblies
using CustomNamespace::whatevernamespace.youwant
// You can call the other assemblyThe other assembly which you didn't touch in your .csproj will still be using the global namespace
using global::whatevernamespace.youwant
```

You could also have two custom namespaces for each assembly.  
*ProjectName.csproj*
```xml
// Project.csproj
<ProjectReference Include="..\Example.Project1\Example.Project1.csproj">
	<Aliases>CustomNamespace1</Aliases>
</ProjectReference>
<ProjectReference Include="..\Example.Project2\Example.Project2.csproj">
	<Aliases>CustomNamespace2</Aliases>
</ProjectReference>
```

```csharp
// whatever.cs
extern alias CustomNamespace1
extern alias CustomNamespace2

using CustomNamespace1::whatevernamespace.youwant
using CustomNamespace2::whatevernamespace.youwant
```

Comments and feedback are appreciated at [arguinjr@gmail.com](mailto:arguinjr@gmail.com?subject=Extern%20Alias%20CSharp)
