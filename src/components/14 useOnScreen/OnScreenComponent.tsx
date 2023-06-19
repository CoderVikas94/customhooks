import { useRef } from "react";
import useOnScreen from "./useOnScreen";

interface OnScreenComponentProps {
  rootMargin?: string;
}

const OnScreenComponentComponent: React.FC<OnScreenComponentProps> = ({
  rootMargin = "-100px"
}) => {
  const headerTwoRef = useRef<HTMLHeadingElement>(null);
  const visible = useOnScreen({ ref: headerTwoRef, rootMargin:rootMargin });

  return (
    <div className="p-[10px]">
      <h1 className="text-2xl">Header</h1>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum doloribus saepe nulla, quaerat voluptas necessitatibus eum! Delectus, nulla aut voluptatibus, laborum itaque ducimus animi maiores, officiis minus cum est. Maxime in aspernatur assumenda iure dolorem quaerat dicta. Consequuntur id laboriosam eligendi aliquid. Modi quibusdam blanditiis aut exercitationem beatae excepturi iam neque voluptatum rerum quo pariatur nihil quis eveniet harum dolorum, animi non sapiente quaerat soluta esse. Qui ullam vel perferendis non excepturi fuga eveniet quisquam soluta iusto fugit harum totam modi dolores, explicabo laborum exercitationem ea id necessitatibus, quam illum accusantium aspernatur ipsam. Illo, porro. A praesentium quam esse totam maiores consequatur expedita, cum illum officiis illo, aliquinventore delectus recusandae velit consequuntur dignissimos non sequi? Repudiandae veniam, eius dolores voluptatum dolorum tenetur itaque ex aliquam, sapiente, sint blanditiis perspiciatis! Sunt distinctio corporis tenetur temporibus rem? Dolor vitae nisi nobis quae quos! Asperiores!
      </div>
      <h1 className="text-2xl" ref={headerTwoRef}>Header 2 {visible && "(Visible)"}</h1>
      <div>
        {/* More Content */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laudantium ut eligendi minus nihil inventore alias placeat quis fugit, ab voluptates amet accusamus aspernatur non, natus a consequatur velit culpa, architecto recusandae aliquam. Odit inventore quam similique commodi accusamus, architecto, eos modi nostrum pariatur perspiciatis suscipit eum laboriosam, eligendi fugit nemo est aliquid rerum impedit minus quibusdam! Harum nostrum officiis ad maiores labore tenetur praesentium deleniti saepe quaerat, velit, ipsam modi ipsum quis reiciendis cum! Corporis laborum voluptatibus velit. Tempore veniam facere illo ratione animi doloremque. Minima dolorem obcaecati id? Porro distinctio quidem quia repellendus adipisci? Rem optio, quaerat maiores non veniam quisquam, sapiente consequatur voluptas cupiditate obcaecati quod nisi iste iusto quam officia ratione possimus, voluptate praesentium at voluptatum? Dolorem vitae illum saepe maiores, fugiat nostrum a magni perspiciatis alias ut ipsum expedita, necessitatibus culpa quasi autem totam corrupti pariatur rem itaque delectus ullam odio. Eum velit eius soluta provident placeat? Inventore placeat, nulla earum nam delectus dicta voluptatem blanditiis ducimus, asperiores quisquam harum maiores at vel alias nihil laboriosam ipsam hic! Tenetur dolorem, porro magnam reprehenderit id ratione ex possimus? Voluptatum blanditiis eligendi deleniti optio laborum corporis ratione, earum, corrupti sequi tempora dolor quam, nihil ipsum ducimus ea quia adipisci. Eum id quis laborum! Et veritatis perspiciatis aliquid fugiat quae earum quas architecto libero aliquam qui dolorem, nemo sed nam delectus aut provident distinctio eius reprehenderit animi consequuntur eligendi. Vel similique tenetur laborum nostrum quo, veniam nam facilis beatae quos eaque, quod, ipsa animi commodi illo saepe tempore sapiente sed voluptatum minima aut quidem ab aliquid eius libero! Ratione tenetur molestiae enim hic, ullam inventore voluptate minus eveniet error tempora suscipit voluptas nemo modi quasi similique sequi atque nesciunt? Adipisci quas architecto praesentium iusto tenetur. Commodi iure accusantium provident corporis, nesciunt laudantium, recusandae natus, placeat eum incidunt molestiae modi consequatur neque! Dicta totam, consectetur consequatur veniam quis enim, doloribus tenetur voluptate labore optio magni est. Corporis aliquid alias modi deleniti iure dolor necessitatibus ab cumque libero ea accusamus, nam quisquam tempore numquam porro, officiis eos consequatur impedit dicta consequuntur! Vel esse beatae quis doloribus inventore omnis repellat modi mollitia eos, illum magnam nam nobis rem similique labore autem, minima necessitatibus. Recusandae, ab ipsam nam non dolores minima quo corrupti. Ad reprehenderit tenetur temporibus aliquid impedit hic maiores dignissimos quas error iusto deleniti omnis, veritatis fugiat ex, voluptate, modi esse recusandae eaque blanditiis dolor dicta atque! Eum architecto cupiditate quo quam similique tenetur dolorum ipsam velit doloremque? Eos cumque numquam at autem error quia optio delectus quod illum quo nihil animi neque fuga voluptatem ex magni, et sequi? Saepe sapiente explicabo facilis a, consectetur deserunt asperiores sed dolor modi repellendus distinctio voluptatibus quas libero nostrum aut exercitationem adipisci delectus laudantium sunt dolore ex? Dolores, numquam amet! Illo delectus repudiandae, laborum animi praesentium alias incidunt ex officia asperiores iste tempore doloremque voluptas hic! Nostrum tempore praesentium ad ratione necessitatibus. Fuga, quis unde sapiente distinctio magnam cumque nihil voluptatum? Pariatur neque tempore autem, quas reiciendis vitae dolorem voluptatum sint dolores asperiores.
      </div>
    </div>
  );
};

export default OnScreenComponentComponent;
