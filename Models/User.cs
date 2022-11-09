using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HUAWEI_2022___PROTOTYPE.Models{
    internal class User
    {
        /// <summary>
        /// An ID that uniquely indentifies the user.
        /// </summary>
        public Guid ID { get; set; }

        /// <summary>
        /// Name of the user in the application. It doesn't need to be unique.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// An unique username for the user in the application.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// User email
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Type of the user: enterprise, researcher, student etc.
        /// </summary>
        public string UserType { get; set; }

        /// <summary>
        /// User Age
        /// </summary>
        public int Age { get; set; }

        // Constructors
        /// <summary>
        /// Default constructor with all the atributes
        /// </summary>
        public User(Guid id, string name, string username, string email, string usertype, int age){
            ID = id;
            Name = name;
            UserName = username;
            Email = email;
            UserType = usertype;
            Age = age;
        }
        
        /// <summary>
        /// Empty constructor
        /// </summary>
        public User(){
            ID = new Guid();
            Name = "null";
            UserName = "null";
            Email = "null";
            UserType = "null";
            Age = 0;
        }
        
        public void ShowUserInfo(){
            Console.WriteLine($"ID: {ID}");
            Console.WriteLine($"Name: {Name}");
            Console.WriteLine($"Username: {UserName}");
            Console.WriteLine($"Email: {Email}");
            Console.WriteLine($"Age: {Age}");
        }

    }
}
