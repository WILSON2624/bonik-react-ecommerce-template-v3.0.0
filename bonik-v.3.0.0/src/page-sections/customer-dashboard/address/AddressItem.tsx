"use client";

import Link from "next/link";

import Icon from "@component/icon/Icon";
import TableRow from "@component/TableRow";
import Typography from "@component/Typography";
import { IconButton } from "@component/buttons";
import Address from "@models/address.model";

export default function AddressItem({ item }: { item: Address }) {
  return (
    <TableRow my="1rem" padding="6px 18px" key={item.id}>
      <Typography className="pre" m="6px" textAlign="left">
        {item.title}
      </Typography>

      <Typography flex="1 1 260px !important" m="6px" textAlign="left">
        {`${item.street}, ${item.city}, ${item.country}`}
      </Typography>

      <Typography className="pre" m="6px" textAlign="left">
        {item.phone}
      </Typography>

      <Typography className="pre" textAlign="center" color="text.muted">
        <Link href={`/address/${item.id}`}>
          <IconButton>
            <Icon variant="small" defaultcolor="currentColor">
              edit
            </Icon>
          </IconButton>
        </Link>

        <IconButton onClick={(e) => e.stopPropagation()}>
          <Icon variant="small" defaultcolor="currentColor">
            delete
          </Icon>
        </IconButton>
      </Typography>
    </TableRow>
  );
}
