# class Profile:
#     def __init__(self,name,email,language):
#         self.name = name
#         self.email = email
#         self.language = language


# person_1 = Profile("Sara","sara@gmail.com","bolonia")
# print(f"{person_1.name},her email is:{person_1.email} and her language is:{person_1.language}")
# person_2 = Profile("Hajar","hajar@gmail.com","Egypt")
# print(person_2.name,person_2.email,person_2.language)
# person_3 = Profile("Laila","laila@gmail.com","Litonia")
# print(person_3.name,person_3.email,person_3.language)

#---------------------------------------------------------------------------------
# class Chat:
#     def __init__(self,trans,recive,msg_content,msg_date):
#         self.trans = trans
#         self.recive = recive
#         self.msg_content = msg_content
#         self.msg_date = msg_date


# chat_1 = Chat("sara","me","hello","24/11/2024")
# chat_2 = Chat("fatima","me","Salamualaikum","23/11/2024")
# chat_3 = Chat("amal","me","bonjour","19/11/2024")
# print(chat_1.msg_content)

# # -----------------------------------------------------------------------------------
# class Product:
#     def __init__(self,price,rate,description):
#         self.price = price
#         self.rate = rate
#         self.description = description

# product_1 = Product(200,"*****","New headphone for gaming and listing and stuff")
# product_2 = Product(100,"*****","fast samsung smartphone charger")
# product_3 = Product(70,"*****","Strong anticutting kichen gloves")

# print(product_1.description, product_2.price, product_3.rate)


class Movies:
    def __init__(self,title,director,release_year,genre):
        self.tiltle = title
        self.director = director
        self.release_year = release_year
        self.genre = genre

    def display_movies(self):
        print(f"Title: {self.tiltle}\nDirector: {self.director}\nRelease Year: {self.release_year}\nGenre: {self.genre}\n")


    def updated_director(self, updated):
        self.director = updated

movie_1 = Movies("Inception","Christopher Nolan",2010, "Sci-Fi")
movie_2 = Movies("Harry Potter", "harry", 2012, "sc-fiction")
movie_3 = Movies("Parasite","Ahmed",2019,"Thriller")
print("====== Movies List ======\n")
movie_1.display_movies()  
movie_2.display_movies()  
movie_3.display_movies()  

movie_1.updated_director("Shokry")
movie_2.director="Bob"
movie_3.director="Kikobat"

print("\n--->>Changing movies...\n")  
movie_1.display_movies()   
movie_2.display_movies()   
movie_3.display_movies() 
