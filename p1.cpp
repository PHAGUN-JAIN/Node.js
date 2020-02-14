#include<iostream>
#include<math.h>
using namespace std; 

   class rectangle{
                 
                       int length;
                       int breadth;
               public:
                   rectangle(){

                         length=2;  //initialising variable
                               }
                 int peri() {
                        breadth = 314/2;
                       int perimeter = 2*(length+breadth);
                     }
                   } r;




    class triangle{
                     int height;
                     int base;
                     
               public:
                    triangle(){
                              height =4;  //initialising variable
                               } 
                    int peri(){
                                int hypo;
                                base =(2*314)/height;
                                hypo=sqrt((base*base)+(height*height));
                               int perimeter = hypo+base+height;
                               return perimeter;                         
                                }
                     }t ;




     class square{
                       int side;
                 public:
                        square(){
                                  side=0;      //initialising variable
                                }
                     int peri(){
                                 side=314/4;
                               int perimeter =4*side;
                               return perimeter;
                                } 
                      }s;




     class circle{
                      int radius;
                  public:
                         circle(){
                                radius=0;
                                 }
                         int peri(){
                                         radius=sqrt(100);
                                         int perimeter= 2*3*radius;
                                         return perimeter;
                                         }
                   }c;
                          
                     

                      



int main ()
{  
  int p1=  r.peri();
  int p2=  s.peri();
  int p3=  t.peri();
  int p4=  c.peri();
   if( (p1>p2) && (p1>p3) && (p1>p4) )
  {cout<<"p1 is greatest";}
  if( (p2>p1) && (p2>p3) && (p2>p4) )
  {cout<<"p2 is greatest";}
  if( (p3>p2) && (p3>p4) && (p3>p1) )
  {cout<<"p3 is greatest";}
    else 
  {cout<<"p4 is greatest";}

   cout<<"\n";


    if( (p1<p2) && (p1<p3) && (p1<p4) )
  {cout<<"p1 is smallest";}
  if( (p2<p1) && (p2<p3) && (p2<p4) )
  {cout<<"p2 is smallest";}
  if( (p3<p2) && (p3<p4) && (p3<p1) )
  {cout<<"p3 is smallest";}
   else
   cout<<"p4 is smallest";


}
