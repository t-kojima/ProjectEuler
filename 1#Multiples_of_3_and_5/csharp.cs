using System;
using System.Linq;

public class Test
{
	public static void Main()
	{
		Console.WriteLine(Enumerable.Range(1, 999).Where(i => i % 3 == 0 || i % 5 == 0).Sum());
	}
}
