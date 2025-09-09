/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package prefinal_domingo;
import java.util.Scanner;

/**
 *
 * @author user
 */
public class inorder {
    class Node {
      int key;
       Node left, right;

        public Node(int item) {
            key = item;
            left = right = null;
        }
    }
    
    Node root;
    
        inorder() {
        root = null;
    }

    void insert(int key) {
        root = insertRec(root, key);
    }

    Node insertRec(Node root, int key) {
        if (root == null) {
            root = new Node(key);
            return root;
        }

        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);

        return root;
    }

    void inorder() {
        inorderRec(root);
        System.out.println();
    }

    void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.key + " ");
            inorderRec(root.right);
        }
    }
    
  
   

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
         Scanner scanner = new Scanner(System.in);
        inorder bst = new inorder();

        System.out.println("BINARY SEARCH TREE SIMULATION - INORDER");
        System.out.print("ENTER THE ROOT NODE: ");
        int rootValue = scanner.nextInt();
        bst.insert(rootValue);

        System.out.println("ENTER NUMBERS TO INSERT INTO THE TREE (enter -1 to stop):");
        while (true) {
            int value = scanner.nextInt();
            if (value == -1)
                break;
            bst.insert(value);
        }
        
        System.out.println("\nINORDER TRAVERSAL:");
        bst.inorder();
    }
    
}
