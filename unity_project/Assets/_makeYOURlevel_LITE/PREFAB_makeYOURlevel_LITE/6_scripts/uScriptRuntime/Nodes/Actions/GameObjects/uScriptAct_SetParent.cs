// uScript Action Node
// (C) 2011 Detox Studios LLC

using UnityEngine;
using System.Collections;
using System.Collections.Generic;

[NodePath("Actions/GameObjects")]

[NodeCopyright("Copyright 2011 by Detox Studios LLC")]
[NodeToolTip("Sets the parent of a GameObject.")]
[NodeAuthor("Detox Studios LLC", "http://www.detoxstudios.com")]
[NodeHelp("http://www.uscript.net/docs/index.php?title=Node_Reference_Guide")]

[FriendlyName("Set Parent", "Sets the parent of a GameObject.")]
public class uScriptAct_SetParent : uScriptLogic
{
   public bool Out { get { return true; } }

   public void In (
      [FriendlyName("Target", "The GameObject you wish to be the child.")]
      GameObject[] Target,
      
      [FriendlyName("Parent", "The GameObject you wish to set as the Target's parent.")]
      GameObject Parent
      )
   {
      
      foreach(GameObject tmpTarget in Target)
	  {
	     if (null != tmpTarget)
		 {
		    if (null != Parent)
			{
			   tmpTarget.transform.parent = Parent.transform;
			}
			else
			{
			   tmpTarget.transform.parent = null;
			}
		    
		 }
	  }

   }
}
