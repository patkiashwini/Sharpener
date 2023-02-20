package com.Ashwini;

import java.util.Scanner;

public class IsPrime {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.print("Enter number : ");
        int n = in.nextInt();
        if(isprime(n)){
            System.out.println("true");
        }else{
            System.out.println("False");
        }

    }
    static boolean isprime(int n){
        if(n<=1){
            return false;
        }
        for(int i=2;i<n;i++){
            if(n%i==0){
                return false;
            }
        }
        return true;


    }
}
