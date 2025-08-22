#include<iostream>
using namespace std;
int main(){

int bal = 0, check_bal, dep, with, cho_1, cho_2, rp=0;
string reg, user, pass, con_pass, ent_user, ent_pass;


do{
	cho_1 = 0;

		cout<< "1. REGISTER"<<"\n"<<"2. LOG IN"<<"\n"<<"3. EXIT"<<"\n"<<"ENTER YOUR CHOICE: ";
		cin>> cho_1;
		cout<<endl;

		if (cho_1 == 1){
			cout<<"REGISTER"<<endl;
			cout<<"ENTER YOUR USERNAME: ";
			cin>> user;
			
			do{	
				con_pass = "0";		
				cout<<"ENTER YOUR PASSWORD: ";
				cin>> pass;
				cout<<"CONFIRM YOUR PASSWORD: ";
				cin>>con_pass;
				
					if(con_pass != pass){
						cout<<"\n"<<"PLEASE TRY AGAIN"<<endl;
					}
					else{
					}
					
			}while(con_pass != pass);
			
					cout<<"\n"<<"REGISTRED SUCESSFULLY!!"<<"\n"<<endl;
					
		}else if (cho_1 == 2){
			cout<<"\n"<<"LOG IN"<<endl;	
							
				do{					
					cout<<"ENTER USERNAME: ";
					cin>> ent_user;
					cout<<"ENTER PASSWORD: ";
					cin>> ent_pass;
					
				 		if(user != ent_user || pass != ent_pass){
				 			cout<<"\n"<<"YOU ENTERED WRONG CREDENTIALS!!"<<endl;
						}
						else{	
						}
						
				}while(user != ent_user || pass != ent_pass);
					
						cout<<"\n"<<"LOG IN SUCESSFULLY!"<<"\n"<<endl;

						do{
							cho_2 = 0 ;
							cout<< "1. CHECK BALANCE"<<"\n"<<"2. DEPOSIT"<<"\n"<<"3. WITHDRAW"<<"\n"<< "4. LOGOUT"<<endl<<"INPUT YOUR CHOICE: ";
							cin>> cho_2;
							cout<<endl;

							if(cho_2 == 1){
								cout<<"\n"<<"YOUR BALANCE: $"<<bal<<endl<<endl;
							}
							else if(cho_2 == 2){
								cout<<"\n"<<"ENTER THE AMOUNT TO DEPOSIT: $";
								cin>> dep;
								bal += dep;
								cout<<"\n"<<"DEPOSIT ACTION SUCESSFULLY!"<<endl<<"YOUR BALANCE: $"<<bal <<endl<<endl;
							}
							else if (cho_2 == 3){
								do{
									rp=0;
									cout<<"\n"<<"ENTER AMOUNT TO WITHDRAW: $";
									cin>>with;
										
									if(bal < with){
										cout<<"\n"<<"INSUFFIECIENT BALANCE!!"<<endl;
									}
									else if(bal >= with){
										rp++;
										bal-=with;
										cout<<"\n"<<endl<<"WITHDRAW SUCESSFULLY!"<<endl<<"CURRENT BALANCE: $"<<bal<<endl<<endl; 
									}										
								}while(rp!=1);
							}
						}while(cho_2 != 4);
					}			
}while(cho_1 != 3);

return 0;
}

